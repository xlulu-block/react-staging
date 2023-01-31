import React,{Component} from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
// 创建并暴露App组件
export default class App extends Component{
    state={
        todo:[{id:'001',name:'吃饭',done:false},{id:'002',name:'睡觉',done:true},{id:'003',name:'敲代码',done:false}],
    }
    // 新增列表数据
    changeListData=(data)=>{
        const {todo}=this.state
        this.setState({todo:[data,...todo]})
    }
    // 复选框状态发生变化
    changeChecked=(data)=>{
        const {todo,}=this.state
        const dataValue=todo[todo.findIndex(item=>item.id===data)].done
        todo[todo.findIndex(item=>item.id===data)].done=!dataValue
        this.setState({todo:todo})
        // 筛选选中的数据
        const newDoneList=todo.filter(item=>item.done===true)
        this.setState({doneList:newDoneList})
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
    // 全选数据
    checkedAll=(flag)=>{
        const {todo}=this.state
        const newTodo=todo.map((item)=>{return {...item,done:flag}})
        this.setState({todo:newTodo})
        
    }
    // 清空所有已完成任务
    clearAllChecked=()=>{
        const {todo}=this.state
        const notChecked=todo.filter(item=>item.done===false)
        this.setState({todo:notChecked})
    }
    render(){
        const {todo}=this.state
        return (<div className="todo-container">
                    <div className="todo-wrap">
                        <Header changeListData={this.changeListData}/>
                        <List todo={todo} changeChecked={this.changeChecked} deleteTodo={this.deleteTodo} />
                        <Footer todo={todo} checkedAll={this.checkedAll} clearAllChecked={this.clearAllChecked}/>
                    </div>
         </div>)
    }
}