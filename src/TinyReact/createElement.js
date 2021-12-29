export default function createElement(type, props, ...children) {
    const childElements = [].concat(...children).reduce((result, child) => {
        // true false null 这些值在 react 中是不会渲染到 html 的
        if (child !== true && child !== false && child !== null) {
            if (child instanceof Object) {
                // 如果是一个对象， 则说明原来是一个 <span>aaa</span> 结构，babel已经转换为 vDOM了
                result.push(child)
            } else {
                // 如果是一个文本，需要转换为 vDOM 的结构
                result.push(createElement('text', {textContent: child}))
            }
        }
        return result
    }, [])
    return {
        type,
        // 将父级元素传递过来的 children 合并到 props 上
        props: Object.assign({children: childElements}, props),
        children: childElements
    }
}
