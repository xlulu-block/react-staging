import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {
    // 键盘抬起事件
    handleInputValue=(event)=>{
        const {keyCode,target}=event
        if(target.value.trim()===''){
            alert('输入不能为空！')
            return
        }
        if(keyCode===13){
            const todoObj={id:nanoid(),name:target.value,done:false}
            this.props.changeListData(todoObj)
            target.value=''
        }
        
    }
    render() {
        return (<div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleInputValue}/>
        </div>
        )
    }
}
