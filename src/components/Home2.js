import React from 'react'
import reactDOM from 'react-dom'
import '../css/main.css'
class Home2 extends React.Component {
    //接受Home的数据
    constructor(props) {
        super()
        this.setState(props)
        this.props.age=10
        this.age = 10        
    }
    setState(props) {
        this.props = props
    }
    render() {
        return <div ref="div">
            {/* {console.log(this)} */}
            {/* {console.log(this.props.bbb)} */}
            {/* 在Home2中的props中可以接受到Home传来的方法 */}
            {/* 触发一个本组件中调用Home中传来的存到props中的方法的函数并传参 */}
            <div onClick={()=>{this.aaa(this)}} className='main'>666</div>
            111
        </div>
    }
    aaa(age){
        console.log(age)
        //调用Home传来的存到props中的方法
        this.props.ccc(age)
    }
}
export default Home2