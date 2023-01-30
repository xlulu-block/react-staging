import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
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
    render() {
        const {id,name,done}=this.props
        const {showBtn}=this.state
        return (
            <li onMouseOver={this.handleDeleteBtn(true)} onMouseOut={this.handleDeleteBtn(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display:showBtn}}>删除</button>
            </li>
        )
    }
}
