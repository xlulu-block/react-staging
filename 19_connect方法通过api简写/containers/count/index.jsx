// 引入连接函数
import {connect} from 'react-redux'
// 引入ui组件
import Count from '../../components/Count'
import {createAdd,createMinus,createAddAsyncAction} from '../../redux/count_action'
// 连接ui组件
// 容器给ui传值，两个参数都需要为函数。第一个为键值对，第二个为操作函数
// const mapStateToProps=(state)=>{
//     return {count:state}
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         jia:val=>dispatch(createAdd(val)),
//         jian:val=>dispatch(createMinus(val)),
//         jiaAsync:(val,time)=>dispatch(createAddAsyncAction(val,time)),
//     }
// }
// 简写方法，第二个参数，react-redux会依次用dispatch去调用
export default connect(state=>({count:state}),
    {
        jia:createAdd,
        jian:createMinus,
        jiaAsync:createAddAsyncAction
    }
)(Count)


