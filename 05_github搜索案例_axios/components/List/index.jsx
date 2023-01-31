import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        const { listData,isFirst,loading,err } = this.props
        return (
           
            <div className="row">
                {
                isFirst?<h1>请输入搜索关键词</h1>:
                loading?<h1>Loading</h1>:
                err?<h1 style={{color:'red'}}>{err}</h1>:
                listData.map((item => <div className="card" key={item.id}>
                    <a href={item.url} rel="noopener" target="_blank" >
                        <img src={item.avatar_url} style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{item.login}</p>
                </div>))}
            </div>
        )
    }
}
