import React, { Component } from 'react'
export default class index extends Component {
  state={
    content:[
      {id:1,text:'内容1'},
      {id:2,text:'内容2'},
      {id:3,text:'内容3'},
    ]
  }
  render() {
    const {content}=this.state
    const {msg,id}=this.props.location.state
    const msgObj=content.find(item=>item.id===id)
    return (
      <div>
         <h1>id:{id}</h1>
         <h1>title:{msg}</h1>
         <h1>text:{msgObj.text}</h1>
      </div>
      
    )
  }
}
