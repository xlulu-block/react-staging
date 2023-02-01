import React, { Component } from 'react'
import Home from './pages/Home' //路由组件
import About from './pages/About'
// NavLink,和Link比较的话，点击时会多一个active的类名
import {NavLink,Route} from 'react-router-dom' 
import Header from './components/Header' //一般组件
export default class App extends Component {


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生写法，用a标签进行路由跳转 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* react中的路由跳转 编写路由连接*/}
                <NavLink className="list-group-item " to='/about'>About</NavLink>
                <NavLink className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
