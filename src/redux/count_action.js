// 该文件只负责创建count文件中的action
import {ADD,MINUS} from './constant'
export const createAdd=(value)=>({type:ADD,data:value})
export const createMinus=(value)=>({type:MINUS,data:value})