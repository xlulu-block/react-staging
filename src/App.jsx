import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
    state={
        listData:[]
    }
    // 保存数据
    saveListData=(data)=>{
        this.setState({listData:data})
    }
  render() {
    const {listData}=this.state
    return (
        <div className="container">
            <Search saveListData={this.saveListData}/>
            <List listData={listData}/>
      </div>
    )
  }
}
