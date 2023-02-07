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
        const { personList,num }=this.props
        return (
            <div>
                <h4>People</h4>
                <h4>总数{num}</h4>
                <input type="text" ref={c=>this.name=c} placeholder='请输入姓名' />
                <input type="text" ref={c=>this.age=c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        personList.map(item=>(<li key={item.id}>
                            年龄{item.age},姓名{item.name}
                        </li>))
                    }
                </ul>
            </div>
        )
    }
}
// 简写方法，第二个参数，react-redux会依次用dispatch去调用
export default connect(state=>({personList:state.people,num:state.num}),
    {
        addPerson:createAddPerson
    }
)(Person)
