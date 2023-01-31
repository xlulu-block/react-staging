import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
import PropTypes from 'prop-types'
export default class Header extends Component {
    // 限制prop传入数据格式
    static propTypes={
        changeChecked:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
        todo:PropTypes.array.isRequired
    }
    render() {
        const { todo,changeChecked,deleteTodo } = this.props
        return (<ul className="todo-main">
            {todo.map(item => <Item {...item} key={item.id} changeChecked={changeChecked} deleteTodo={deleteTodo}/>)}
        </ul>
        )
    }
}
