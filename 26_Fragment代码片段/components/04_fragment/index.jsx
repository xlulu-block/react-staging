import React, { Component,Fragment } from 'react'

// Fragment,代码碎片，相当于vue的template，这个标签上只能写key属性，其余都不能写
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <h2>Fragment</h2>
        </Fragment>
    )
  }
}
