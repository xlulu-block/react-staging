import React from 'react'
// hook，让函数式组件也可以修改state
function Demo() {
    /**
     * count:变量名  setCount:改变变量名的方法
     * useState(val),这里面放初始值
     */
    const [count,setCount]=React.useState(0)
    const add=()=>{
        // 第一种写法
        // setCount(count+1)
        // 第二种写法
        setCount(count=>count+1)

    }


    // 加载，更新，销毁阶段都会执行。共两个参数，第一个写执行函数，第二个写要监听的state值，不写的话每次更新都会执行
    // 销毁时在第一个参数的回调函数里面执行
    React.useEffect(()=>{
        console.log(123);
        return ()=>{
            // 销毁时会走这里面

        }
    },[count])
    
    const myRef=React.useRef()
    const show=()=>{
        console.log(myRef.current.value)
    }
    return (
        <div>
            <h3>{count}</h3>
            <input type="text" ref={myRef} />
            <button onClick={add}>加一</button>
            <button onClick={show}>显示信息</button>
        </div>
        )
}
export default Demo