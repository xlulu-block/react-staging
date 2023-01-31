import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class index extends Component {
  handleSearch=()=>{
    const {updateAppState}=this.props
    // 连续结构赋值
    // 如果在value后面加个:xxx就是重命名
    const {keyWord:{value}}=this
    updateAppState({loading:true,isFirst:false})
    axios.get(`/api1/search/usersa?q=${value}`).then(
    response=>{
      updateAppState({listData:response.data.items,loading:false})
    },
    error=>{
      updateAppState({err:error.message,loading:false})},

    )
  }
  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input type="text" ref={c=>this.keyWord=c} placeholder="请输入用户名"/>&nbsp;<button onClick={this.handleSearch}>搜索</button>
          </div>
        </section>
    )
  }
}
