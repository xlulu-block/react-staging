/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {ADD_PERSON} from '../constant'
const initState = [{id:'1',name:'张三',age:10}] //初始化状态
export default function personReducer(preState=initState,action){
	// console.log(preState);
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case ADD_PERSON: //如果是加
		// preState.unshift(data)  //这里不能写这句，这样的话违背了reducer里面只能是纯函数的原则
		// 第二个原因，上面就算改变了preState的值，但是这个数组指向的地址还是不会发生变化。那么return出去之后就不会更新
			return [data,...preState]
		default:
			return preState
	}
}