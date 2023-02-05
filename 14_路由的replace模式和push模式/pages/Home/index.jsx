import React, { Component } from 'react'
import './index.css'
import MyNavLink from '../../components/MyNavLink'  //对navLink进行的二次封装
import Messages from './Messages'
import News from './News'
import { Route, Redirect,Switch } from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink replace to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink replace to='/home/message'>Msg</MyNavLink>
          </li>
        </ul>
        {/* 路径和component一一匹配,提高效率 */}
        <Switch>
          <Route path='/home/message' component={Messages} />
          <Route path='/home/news' component={News} />
          {/* 路由重定向 */}
          <Redirect to='/home/news' />
        </Switch>


      </div>

    )
  }
}
