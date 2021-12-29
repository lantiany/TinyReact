import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";

export default function mountComponent(virtualDOM, container, oldDOM){
    let nextVirtualDOM = null
    let component = null
    // 判断是函数组件还是类组件
    if (isFunctionComponent(virtualDOM)){
        // 函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
    } else {
        // 类组件
        nextVirtualDOM = buildClassComponent(virtualDOM)
        component = nextVirtualDOM.component
    }

    if (isFunction(nextVirtualDOM)){
        // 不管是函数组件还是类组件 build 之后，有可能内部返回的还是一个组件（组件中使用组件）
        // 这时候如果 调用 mountNativeElement 是错误的
        // mountNativeElement 只能挂载 nativeElement
        // 所以要继续调用 mountComponent 将组件最终转换为 nativeElement
        mountComponent(nextVirtualDOM, container, oldDOM)
    }else{
        // 组件最终返回的都是 nativeElement， 所以接下来使用 mountNativeElement 挂载
        mountNativeElement(nextVirtualDOM, container, oldDOM)
    }

    // 处理组件的 ref 属性
    if (component){
        // 调用组件的 componentDidMount 生命周期钩子
        component.componentDidMount()
        if (component.props && component.props.ref){
            component.props.ref(component)
        }
    }
}

function buildFunctionComponent(virtualDOM){
    // 如果是一个函数组件，type则存储了这个函数
    // 函数组件的参数存储在 props 中
    return virtualDOM.type(virtualDOM.props || {})
}

function buildClassComponent(virtualDOM){
    // 类组件需要用 new 实例化
    // 实例化的时候也同样传递给类组件的 constructor 一个 props
    // new 的时候调用了 子组件的 constructor， 内部的 super(props) 调用父组件的 constructor
    // 这样 props 就存在于 这个类上
    const component = new virtualDOM.type(virtualDOM.props || {})
    // 返回类组件的 render 结果
    const nextVirtualDOM = component.render()
    // 将这个组件 render 函数返回的 虚拟DOM 上添加一个 component 属性
    // 用于在 类组件更新的时候 能够拿到这个组件的 vDOM，进行diff
    // 这里的 vDOM 会返回给 mountNativeElement 做元素的挂载
    nextVirtualDOM.component = component
    return nextVirtualDOM
}


