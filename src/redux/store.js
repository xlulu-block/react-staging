/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
//引入createStore，专门用于创建redux中最为核心的store对象(已弃用)
import {configureStore} from '@reduxjs/toolkit'
// 引入reducer入口文件
import allReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


//暴露store
// 最新的react—redux不需要写中间件
export default configureStore({
    allReducer,
	composeWithDevTools
})