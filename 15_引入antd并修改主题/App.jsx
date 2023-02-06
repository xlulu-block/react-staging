import React, { Component } from 'react'
import { Button, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
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
        <Button type='primary' >测试主题色按钮</Button>
      </ConfigProvider>
    )
  }
}
