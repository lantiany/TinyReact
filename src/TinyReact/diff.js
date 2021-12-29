import mountElement from './mountElement'
import updateTextNode from "./updateTextNode";
import updateNodeElement from "./updateNodeElement";
import createDOMElement from "./createDOMElement";
import unmountNodes from "./unmountNodes";
import diffComponent from "./diffComponent";

/**
 * diff 方法是深度优先的
 * 深入到节点的叶子节点，开始比对，完成之后回到上一级
 * diff 过程中只进行同级元素比较
 * 直到所有的子节点比对完毕，结束整个 diff 过程
 */
export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // component 属性在 buildClassComponent 的时候将其挂载到了生成的 dom 上，所以在此处可以拿到
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component
    if (!oldDOM) {
        mountElement(virtualDOM, container);
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
        // 同一级的这两个新旧节点类型不同的情况处理
        // 此处要排除新的节点是一个函数组件或者类组件的情况，这个情况不能直接替换，放到后面处理
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)
    } else if (typeof virtualDOM.type === 'function') {
        // 是组件的情况
        diffComponent(virtualDOM, oldComponent, oldDOM, container)
    } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
        // diff 类型相同的情况，即 type 不变，变化属性和内容
        if (virtualDOM.type === 'text') {
            // 文本节点发生变化，更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
        } else {
            // 元素节点发生变化，更新元素的属性
            // 找到新旧节点的属性，对比差异，更新 virtualDOM.props  oldVirtualDOM.props
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
        }


        const keyedElements = {};
        for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
            const domElement = oldDOM.childNodes[i]
            if (domElement.nodeType === 1) {
                const key = domElement.getAttribute('key')
                if (key) {
                    keyedElements[key] = domElement
                }
            }
        }
        const hasNoKey = Object.keys(keyedElements).length === 0;

        // 有 key 使用 key 做 diff, 没有 key 用索引做 diff
        if (hasNoKey) {
            /**
             * index diff
             * 子节点将逐个的遍历下去，（暂时先用索引，后面改造成 key）
             */
            virtualDOM.children.forEach((child, index) => {
                diff(child, oldDOM, oldDOM.childNodes[index])
            })
        } else {
            /**
             * key diff
             * 1、将带有key属性的子元素找出来， 放入 keyedElements 中
             * 2、遍历 virtualDOM 的子元素，获取每个子元素的 key 属性
             */
            virtualDOM.children.forEach((child, i) => {
                let key = child.props.key;
                if (key) {
                    let domElement = keyedElements[key]
                    if (domElement) {
                        if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
                            oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
                        }
                    } else {
                        // 没有在 keyedElements 中找到这个元素，说明是一个新增的元素
                        // 直接挂载这个新增元素就可以了
                        // 但是要注意位置
                        mountElement(child, oldDOM, oldDOM.childNodes[i])
                    }
                }
            })
        }

        // 删除节点
        /**
         * 新旧节点的对比完成以后，如果有元素被删除（这里说的是删除，不是修改）
         * 那一定是 新节点的子节点 比 旧节点的子节点 少
         * 所以可以开启一个倒序的循环，将索引超出（新节点子节点个数 -1）的节点移除
         */
        let oldChildNodes = oldDOM.childNodes;
        // 判断成立，说明有节点需要删除
        if (oldChildNodes.length > virtualDOM.children.length) {
            if (hasNoKey) {
                // 没有设置 key， 仍然用索引的方式删除
                for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                    unmountNodes(oldChildNodes[i])
                }
            } else {
                // 有 key 通过 key 删除元素
                for (let i = 0; i < oldChildNodes.length; i++){
                    // 拿到每一个旧的子节点
                    let oldChild = oldChildNodes[i]
                    // 拿到这个旧节点的 key
                    let oldChildKey = oldChild._virtualDOM.props.key
                    let found = false
                    // 遍历新的 virtualDOM 中是否存在携带这个 key 的元素
                    for (let j = 0; j < virtualDOM.children.length; j++){
                        if (oldChildKey === virtualDOM.children[j].props.key){
                            found = true
                            break
                        }
                    }
                    // 如果没有，说明这是一个需要删除的节点
                    if (!found){
                        unmountNodes(oldChild)
                    }
                }
            }
        }

    }
}
