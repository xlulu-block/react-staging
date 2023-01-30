import React, { Component } from 'react'
import './index.css'
// import PropTypes from 'prop-types'
export default class Header extends Component {
    state={
        allChecked:false
    }
    handleCheckedAll=()=>{
        return (event)=>{
            this.props.checkedAll(event.target.checked)
        }
    }
    // 反选全选
    judgeIsAllChecked=(doneCount,todo)=>{
        if(doneCount===todo.length){
            this.setState({allChecked:true})
        }
    }
    render() {
        const {todo}=this.props
        const {allChecked}=this.state
        const doneCount=todo.reduce((pre,cru)=>pre+(cru.done?1:0),0)
        this.judgeIsAllChecked(doneCount,todo)
        return (  <div className="todo-footer">
                    <label>
                    <input type="checkbox" onChange={this.handleCheckedAll} defaultChecked={allChecked}/>
                    </label>
                    <span>
                    <span>已完成{doneCount}</span> / 全部{todo.length}
                    </span>
                    <button className="btn btn-danger">清除已完成任务</button>
                </div>
        )
    }
}
