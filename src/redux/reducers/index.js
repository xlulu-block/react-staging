// 引入所有reducer文件
import {combineReducers} from '@reduxjs/toolkit'
import countReducer from './count'
import personReducer from './person'
export default combineReducers({
    num:countReducer,
    people:personReducer
})