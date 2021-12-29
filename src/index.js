import TinyReact from "./TinyReact";

const root = document.getElementById('app')

const virtualDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h2>(编码必杀技)&hearts;</h2>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3 data-test="test">(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}
        <span>这是一段内容</span>
        <button onClick={() => alert("你好")}>点击我</button>
        <h3>这个将会被删除</h3>
        2, 3

        <input type="text"/>
    </div>
)

const modifyDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h2 data-test="test111">(编码必杀技)&hearts;</h2>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3 data-test="test">(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}
        <span>这是一段被修改的内容</span>
        <button onClick={() => alert("你好!!!")}>点击我</button>
        <input type="text" value={111}/>
    </div>
)

function Demo(props){
    return <div>{props.title}&hearts;</div>
}

const Header = function () {
    return <Demo title="Hello, React"/>
}

class Alter extends TinyReact.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            title: 'Changed Title'
        })
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(props){
        console.log('componentWillReceiveProps: ', props)
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render(){
        console.log(this.state)
        return <div>
            <h1>Hello, React</h1>
            <h2>{ this.state.title }</h2>
            <h3>name: {this.props.name}</h3>
            <h3>age: {this.props.age}</h3>
            <button onClick={this.handleClick}>点我改变 Title</button>
        </div>
    }
}

// TinyReact.render(<Alter name="Jack" age={20}/>, root)
// // TinyReact.render(<Header />, root)

// TinyReact.render(virtualDOM, root);
// setTimeout(() => {
//     // TinyReact.render(modifyDOM, root);
//     TinyReact.render(<Alter name="Rose" age={18}/>, root)
// }, 2000)
// console.log(virtualDOM)


class DemoRef extends TinyReact.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this.input.value)
        console.log(this.alert)
    }

    componentDidMount(){
        console.log('DemoRef componentDidMount')
    }

    render(){
        return (
            <div>
                <input type="text" ref={input => { this.input = input }}/>
                <button onClick={this.handleClick}>点我</button>
                <Alter ref={alert => this.alert = alert} name="Jack" age={20} />
            </div>
        )
    }
}


class PersonDiffTest extends TinyReact.Component{
    constructor() {
        super();
        this.state = {
            persons: [
                {id: 1, name: '张三'},
                {id: 2, name: '李四'},
                {id: 3, name: '王五'},
                {id: 4, name: '赵六'},
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.persons.splice(1, 0, {id: 10, name: '李逵'})
        this.setState(newState)
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.persons.map(person => {
                            return <span key={person.id}>{ person.name }</span>
                        })
                    }
                </ul>
                <button onClick={this.handleClick}>点我交换顺序</button>
            </div>
        )
    }
}

TinyReact.render(<PersonDiffTest />, root)
