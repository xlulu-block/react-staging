import React,{Component} from "react";
import axios from 'axios'
// 创建并暴露App组件
export default class App extends Component{
    // 获取学生信息
    getStudentsData=()=>{
    axios.get('/api1/students').then(
                response=>console.log('成功',response.data),
                error=>console.log('失败',error.data)
            )
    }
    // 获取车辆信息
    getCarData=()=>{
    axios.get('/api2/cars').then(
                response=>console.log('成功',response.data),
                error=>console.log('失败',error.data)
            )
    }
    render(){
        return (<div>
            <button onClick={this.getStudentsData}>获取学生信息</button>
            <button onClick={this.getCarData}>获取车辆信息</button>
        </div>)
    }
}