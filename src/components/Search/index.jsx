import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class index extends Component {
  handleSearch=()=>{
    // 连续结构赋值
    // 如果在value后面加个:xxx就是重命名
    const {keyWord:{value}}=this
    axios.get(`/api1/search/users?q=${value}`).then(
    response=>{
      this.props.saveListData(response.data.items)
    },
    error=>console.log('失败'),

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
