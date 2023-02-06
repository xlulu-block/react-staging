import React, { Component } from 'react'
import {  ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import Count from './components/Count'
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
