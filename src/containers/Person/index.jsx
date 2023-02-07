import { nanoid } from 'nanoid'
import React, { Component } from 'react'
// 引入连接函数
import {connect} from 'react-redux'
import {createAddPerson} from '../../redux/action/person'
class Person extends Component {
    // 添加信息
    addPerson=()=>{
        const name=this.name.value
        const age=this.age.value
        const personEntity={id:nanoid(),age,name}
        this.props.addPerson(personEntity)
    }
    render() {
        console.log(this.props,'@');
        const {people}=this.props.personList
        return (
            <div>
                <h4>Person</h4>
                <input type="text" ref={c=>this.name=c} placeholder='请输入姓名' />
                <input type="text" ref={c=>this.age=c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        people.map(item=>(<li key={item.id}>
                            年龄{item.age},姓名{item.name}
                        </li>))
                    }
                </ul>
            </div>
        )
    }
}
// 简写方法，第二个参数，react-redux会依次用dispatch去调用
export default connect(state=>({personList:state}),
    {
        addPerson:createAddPerson
    }
)(Person)
