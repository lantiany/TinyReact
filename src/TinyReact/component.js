import diff from "./diff";

export default class Component {
    // 给类组件传递 props 的时候，这个 props 怎么样才能让子组件通过 this.props 读取
    // 子类调用 super 方法，实际上就是调用父类的 constructor
    // 子类调用了 super 之后，就可以在自身上找到。
    constructor(props) {
        // 子类调用 super ，此时的 this 是子类
        this.props = props
    }

    setState(state) {
        this.state = Object.assign({}, this.state, state)
        const virtualDOM = this.render()
        const oldDOM = this.getDOM()
        const container = oldDOM.parentNode
        diff(virtualDOM, container, oldDOM)
    }

    setDOM(dom) {
        this._dom = dom
    }

    getDOM() {
        return this._dom
    }

    updateProps(props) {
        this.props = props
    }


    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        // default condition
        return nextProps !== this.props && nextState !== this.state
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }
}
