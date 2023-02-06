import React, { Component } from 'react'
import store from '../../redux/store'

export default class index extends Component {
    state={
        original:0
    }
    // 加
    add = () => {
        const newValue=this.selectValue.value
        store.dispatch({type:'add',data:Number(newValue)})
    }
    // 减
    minus = () => { 
        const newValue=this.selectValue.value
        store.dispatch({type:'minus',data:Number(newValue)})
    }
    // 和为偶数时再加
    addIfOdd = () => {
        const newValue=this.selectValue.value
        const old =store.getState()
        if(old%2===0){
            store.dispatch({type:'add',data:Number(newValue)})
        }
    }
    // 异步相加
    addAsync = () => { 
        const newValue=this.selectValue.value
        setTimeout(()=>{
            store.dispatch({type:'add',data:Number(newValue)})
        },500)
    }

    render() {
        return (
            <div>
                <h4>当前num:{store.getState()}</h4>
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
