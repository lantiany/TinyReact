import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

export default function createDOMElement(virtualDOM){
    let newElement = null
    if (virtualDOM.type === 'text') {
        // 文本节点，调用 createTextElement
        newElement = document.createTextNode(virtualDOM.props.textContent)
    } else {
        // 元素节点，调用 createElement
        newElement = document.createElement(virtualDOM.type)
        updateNodeElement(newElement, virtualDOM)
    }

    // 将这个新 DOM 上挂载一个 _virtualDOM 属性，用于 diff 比对
    newElement._virtualDOM = virtualDOM

    // 递归创建子节点
    virtualDOM.children.forEach(child => {
        mountElement(child, newElement)
    })

    // 处理 nativeElement 的 ref
    if (virtualDOM.props && virtualDOM.props.ref){
        virtualDOM.props.ref(newElement)
    }

    return newElement
}
