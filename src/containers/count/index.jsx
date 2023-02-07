// 引入连接函数
import {connect} from 'react-redux'
// 引入ui组件

import {createAdd,createMinus,createAddAsyncAction} from '../../redux/count_action'
import React, { Component } from 'react'
 class Count extends Component {
    // 加
    add = () => {
        const newValue=this.selectValue.value
        // store.dispatch(createAdd(Number(newValue)))
        this.props.jia(Number(newValue))
    }
    // 减
    minus = () => { 
        const newValue=this.selectValue.value
        // store.dispatch(createMinus(Number(newValue)))
        this.props.jian(Number(newValue))
    }
    // 和为偶数时再加
    addIfOdd = () => {
        const newValue=this.selectValue.value
        const old =this.props.count
        if(old%2===0){
            this.props.jia(Number(newValue))
        }
    }
    // 异步相加
    addAsync = () => { 
        const newValue=this.selectValue.value
        this.props.jiaAsync(Number(newValue),500)
    }

    render() {
        console.log(this.props,'@');
        const {count}=this.props
        return (
            <div>
                <h4>当前num:{count}</h4>
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

// 简写方法，第二个参数，react-redux会依次用dispatch去调用
export default connect(state=>({count:state}),
    {
        jia:createAdd,
        jian:createMinus,
        jiaAsync:createAddAsyncAction
    }
)(Count)


