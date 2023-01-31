import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        const { listData } = this.props
        return (
            <div className="row">
                {listData.map((item => <div className="card" key={item.id}>
                    <a href={item.url} rel="noopener" target="_blank" >
                        <img src={item.avatar_url} style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{item.login}</p>
                </div>))}
            </div>
        )
    }
}
