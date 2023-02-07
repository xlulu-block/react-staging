import React, { Component } from 'react'
import {  ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import Count from './containers/count'
// 需要在容器组件的上层传入store
export default class App extends Component {
  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <Count/>
        
      </ConfigProvider>
    )
  }
}
