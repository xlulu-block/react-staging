import React, { Component } from 'react'

export default class index extends Component {
    state={
        count:0
    }
    // 添加函数
    addNum=()=>{
        // const {count}=this.state
        // setState引起的react后续操作是异步更新的，如果需要获取到更新后的数据，需要传入第二个回调函数
        ////this.setState({count:count+1})
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count);
        // })
        // 函数式setState
        this.setState((state)=>({count:state.count+1}))
    }
  render() {
    const {count} =this.state
    return (
      <div>
        <h3>count:{count}</h3>
        <button onClick={this.addNum}>
        点击加一
        </button>
      </div>
    )
  }
}
