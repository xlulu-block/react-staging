// 引入React核心库
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
const root =ReactDOM.createRoot(document.getElementById('root'))
// 将BrowserRouter直接包在App外面，遵循同一个路由
// 包裹BrowserRouter或HashRouter
root.render(<BrowserRouter><App/></BrowserRouter>)