// 引入React核心库
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './redux/store'
import {Provider} from 'react-redux'
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
    <App/>
</Provider>)
// store中的函数，只要state发生变化，就会执行，react-redux不需要去监测实时更新
// store.subscribe(()=>{
//     root.render(<App/>) 
// })