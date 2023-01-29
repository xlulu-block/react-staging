import React,{Component} from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
// 创建并暴露App组件
export default class App extends Component{
    render(){
        return (<div className="todo-container">
                    <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                    </div>
         </div>)
    }
}