import createDOMElement from "./createDOMElement";
import unmountNodes from "./unmountNodes";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM)

    // 将新的 dom 挂载
    if (oldDOM) {
        container.insertBefore(newElement, oldDOM)
    } else {
        container.appendChild(newElement)
    }


    // 挂载dom之前，如果有旧的 dom 需要在此移除
    if (oldDOM) {
        unmountNodes(oldDOM)
    }


    let component = virtualDOM.component;

    // 类组件返回的 virtualDOM 才有 component
    if (component) {
        // 调用 Component 类上的 setDOM 方法
        component.setDOM(newElement)
    }
}
