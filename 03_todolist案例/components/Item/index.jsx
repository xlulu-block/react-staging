import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default class Header extends Component {
     // 限制prop传入数据格式
    // 必传，函数
    static propTypes={
        changeChecked:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }
    state={
        showBtn:'none'
    }
    // 鼠标移入移出事件
    handleDeleteBtn=(flag)=>{
        return ()=>{
            this.setState({showBtn:flag===true?'block':'none'})
        }
    }
    // 点击复选框
    handleChecked=(id)=>{
        return (event)=>{
            this.props.changeChecked(id)
        }
    }
    // 处理删除
    handleDelete=(id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done}=this.props
        const {showBtn}=this.state
        return (
            <li onMouseOver={this.handleDeleteBtn(true)} onMouseOut={this.handleDeleteBtn(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display:showBtn}} onClick={this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
