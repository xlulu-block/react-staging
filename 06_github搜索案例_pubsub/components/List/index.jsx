import React, { Component } from 'react'
import './index.css'
import pubsub from 'pubsub-js'
export default class index extends Component {
    state = {
        listData: [],
        isFirst: true,//是否第一次打开页面
        loading: false,//加载状态
        err: '',//错误信息
    }
    // 保存数据
    updateAppState = (data) => {
        this.setState(data)
    }
    componentDidMount() {
        // 组件挂载完成订阅消息
        // 这里的_符号是用来占位的，因为插件要讲求传入两个参数
        this.pubsubId = pubsub.subscribe('updateState', (_, data) => {
            this.setState(data)
        })
    }
    // 组件将要卸载
    componentWillUnmount() {
        // 组件卸载时取消订阅
        pubsub.unsubscribe(this.pubsubId)
    }
    render() {
        const { listData, isFirst, loading, err } = this.state
        return (

            <div className="row">
                {
                    isFirst ? <h1>请输入搜索关键词</h1> :
                        loading ? <h1>Loading</h1> :
                            err ? <h1 style={{ color: 'red' }}>{err}</h1> :
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
