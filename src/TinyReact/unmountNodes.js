export default function unmountNodes(node) {
    // 获取 node 的 virtualDOM
    const virtualDOM = node._virtualDOM;
    // 1、 文本节点可以直接删除
    if (virtualDOM.type === 'text') {
        return node.remove()
    }

    // 2、节点是否是由组件生成的
    const component = virtualDOM.component
    if (component) {
        component.componentWillUnmount()
    }

    // 3、节点上是否存在 ref 属性
    if (virtualDOM.props && virtualDOM.props.ref) {
        virtualDOM.props.ref(null)
    }

    // 4、节点上是否绑有事件, 有则移除
    Object.keys(virtualDOM.props).forEach(propName => {
        if (propName.slice(0, 2) === 'on') {
            const eventName = propName.toLowerCase().slice(2)
            const eventHandler = virtualDOM.props[propName]
            node.removeEventListener(eventName, eventHandler)

        }
    })

    // 5、递归删除子节点
    if (node.childNodes.length) {
        for (let i = 0; i < node.childNodes.length; i++){
            unmountNodes(node.childNodes[i])
            i--
        }
    }

    // 自杀
    node.remove()
}
