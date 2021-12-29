import diff from "./diff";

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    /**
     * oldComponent 可以拿到这个组件实例
     * 通过实例调用其内部的更新方法
     */

    // 先调用组件的生命周期函数
    oldComponent.componentWillReceiveProps(virtualDOM.props)
    // 如果判断组件 shouldComponentUpdate 才进行更新操作
    if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
        // 拿到组件原来的 props
        const prevProps = oldComponent.props
        oldComponent.componentWillUpdate(virtualDOM.props)

        // 更新操作开始
        // 更新组件的 props
        oldComponent.updateProps(virtualDOM.props)
        // 重新生成 virtualDOM
        const nextVirtualDOM = oldComponent.render()
        // 重新调用了 render，得到了新的 virtualDOM
        // 这里要保持 virtualDOM 中有 component 属性
        nextVirtualDOM.component = oldComponent
        // diff 比对
        diff(nextVirtualDOM, container, oldDOM)

        // 组件更新完成调用 componentDidUpdate 钩子
        oldComponent.componentDidUpdate(prevProps, virtualDOM.props)
    }
}
