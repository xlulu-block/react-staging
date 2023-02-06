import React, { Component } from 'react'

export default class index extends Component {
    state={
        original:0
    }
    // 加
    add = () => {
        const old=this.state.original
        const newValue=this.selectValue.value
        this.setState({original:old+Number(newValue)})
    }
    // 减
    minus = () => { 
        const old=this.state.original
        const newValue=this.selectValue.value
        this.setState({original:old-Number(newValue)})
    }
    // 和为偶数时再加
    addIfOdd = () => {
        const old=this.state.original
        const newValue=this.selectValue.value
        if(old%2===0){
            this.setState({original:old+Number(newValue)})
        }
    }
    // 异步相加
    addAsync = () => { 
        const old=this.state.original
        const newValue=this.selectValue.value
        setTimeout(()=>{
            this.setState({original:old+Number(newValue)})
        },500)
    }

    render() {
        const {original}=this.state
        return (
            <div>
                <h4>当前num:{original}</h4>
                <select ref={c=>this.selectValue=c} >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.addIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.addAsync}>异步相加</button>
            </div>
        )
    }
}
