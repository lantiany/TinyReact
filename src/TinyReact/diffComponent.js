import mountComponent from "./mountComponent";
import updateComponent from "./updateComponent";

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
    if (isSameComponent(virtualDOM, oldComponent)) {
        // 同一个组件，更新组件
        updateComponent(virtualDOM, oldComponent, oldDOM, container)
    } else {
        // 不是同一个组件，用新的组件替换旧的组件
        // 替换的时候需要移除原来的组件，因此把 oldDOM 也传递过去
        mountComponent(virtualDOM, container, oldDOM)
    }
}

// 判断是否是同一个组件
function isSameComponent(virtualDOM, oldComponent) {
    // virtualDOM.type 存储的是组件的构造函数，如果它与 旧的组件的构造函数相等则证明是同一个组件
    return oldComponent && virtualDOM.type === oldComponent.constructor
}
