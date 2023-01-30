import React,{Component} from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
// 创建并暴露App组件
export default class App extends Component{
    state={
        todo:[{id:'001',name:'吃饭',done:true},{id:'002',name:'睡觉',done:false},{id:'003',name:'敲代码',done:true}]
    }
    // 新增列表数据
    changeListData=(data)=>{
        const {todo}=this.state
        this.setState({todo:[data,...todo]})
    }
    // 复选框状态发生变化
    changeChecked=(data)=>{
        console.log(data);
        const {todo}=this.state
        const dataValue=todo[todo.findIndex(item=>item.id===data)].done
        todo[todo.findIndex(item=>item.id===data)].done=!dataValue
        this.setState({todo:todo})
    }
    // 删除todo数据
    deleteTodo=(data)=>{
        const {todo}=this.state
        const index=todo.findIndex(item=>item.id===data)
        if(index>-1){
            todo.splice(index,1)
            this.setState({todo:todo})
        }
    }
    render(){
        const {todo}=this.state
        return (<div className="todo-container">
                    <div className="todo-wrap">
                        <Header changeListData={this.changeListData}/>
                        <List todo={todo} changeChecked={this.changeChecked} deleteTodo={this.deleteTodo} />
                        <Footer/>
                    </div>
         </div>)
    }
}