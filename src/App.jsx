import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import {Link,BrowserRouter} from 'react-router-dom'
export default class App extends Component {


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生写法，用a标签进行路由跳转 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* react中的路由跳转 */}
              <BrowserRouter>
                <Link className="list-group-item active" to='/about'>About</Link>
                <Link className="list-group-item" to='/home'>Home</Link>
              </BrowserRouter>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                111111
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
