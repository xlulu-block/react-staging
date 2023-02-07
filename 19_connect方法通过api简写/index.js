// 引入React核心库
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './redux/store'
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
// store中的函数，只要state发生变化，就会执行
store.subscribe(()=>{
    root.render(<App/>) 
})