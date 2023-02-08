// 该文件只负责创建count文件中的action
import {ADD,MINUS} from '../constant'
export const createAdd=(value)=>({type:ADD,data:value})
export const createMinus=(value)=>({type:MINUS,data:value})
//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createAddAsyncAction = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createAdd(data))
		},time)
	}
}