import React, { Component } from 'react'
import './index.css'
// import PropTypes from 'prop-types'
export default class Header extends Component {
    // 全选函数回调
    handleCheckedAll=(event)=>{
        this.props.checkedAll(event.target.checked)
    }
    // 清空所有选中的任务
    handleClearAllChecked=()=>{
        this.props.clearAllChecked()
    }
    render() {
        const {todo}=this.props
        const doneCount=todo.reduce((pre,cru)=>pre+(cru.done?1:0),0)
        
        return (  <div className="todo-footer">
                    <label>
                    <input type="checkbox" onChange={this.handleCheckedAll} checked={(doneCount===todo.length?true:false)&&doneCount!==0}/>
                    </label>
                    <span>
                    <span>已完成{doneCount}</span> / 全部{todo.length}
                    </span>
                    <button className="btn btn-danger" onClick={this.handleClearAllChecked}>清除已完成任务</button>
                </div>
        )
    }
}
