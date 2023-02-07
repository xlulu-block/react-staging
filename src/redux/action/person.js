// 该文件只负责创建count文件中的action
import {ADD_PERSON} from '../constant'
export const createAddPerson=(value)=>({type:ADD_PERSON,data:value})