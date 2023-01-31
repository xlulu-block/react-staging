import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
    state={
        listData:[],
        isFirst:true,//是否第一次打开页面
        loading:false,//加载状态
        err:'',//错误信息
    }
    // 保存数据
    updateAppState=(data)=>{
        this.setState(data)
    }
  render() {
    const {listData}=this.state
    return (
        <div className="container">
            <Search updateAppState={this.updateAppState} />
            <List {...this.state}/>
      </div>
    )
  }
}
