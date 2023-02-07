/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
//引入createStore，专门用于创建redux中最为核心的store对象(已弃用)

import {configureStore,combineReducers} from '@reduxjs/toolkit'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
const reducer = combineReducers({
    num:countReducer,
    people:personReducer
})

//暴露store
// 最新的react—redux不需要写中间件
export default configureStore({
    reducer
})