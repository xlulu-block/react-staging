import React, { Component,lazy,Suspense } from 'react'
// import Home from './Home'
// import About from './About'
import {NavLink,Route} from 'react-router-dom'
// 路由懒加载
const Home=lazy(()=>import('./Home'))
const About=lazy(()=>import('./About'))
export default class index extends Component {
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

              {/* react中的路由跳转 编写路由连接*/}
                <NavLink className="list-group-item " to='/about'>About</NavLink>
                <NavLink className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 因为是懒加载，所以要有过渡页面，所以要引入Suspense标签 */}
                <Suspense fallback={<h1>Loading.....</h1>}>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                </Suspense>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
