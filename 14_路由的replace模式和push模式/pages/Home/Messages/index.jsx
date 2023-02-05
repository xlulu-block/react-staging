import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail'
export default class index extends Component {
  state = {
    msgList: [{ id: 1, msg: 'message001' }, { id: 2, msg: 'message002' }, { id: 3, msg: 'message003' }]
  }
  render() {
    const { msgList } = this.state
    console.log(2222222);
    return (
      <div>
        <ul>
          {
          msgList.map(item => <li key={item.id}>
            {/* state传参 */}
                <Link replace to={{pathname:`/home/message/detail`,state:{id:item.id,msg:item.msg}}} >{item.msg}</Link>
                </li>
          )
            }
        </ul>
        <Switch>
        {
        msgList.map(item =>
          // params接收参数
            <Route path={`/home/message/detail`} component={Detail} key={item.id} />)
          }
        </Switch>

      </div>

    )
  }
}
