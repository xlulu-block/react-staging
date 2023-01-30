import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class Header extends Component {
    render() {
        const { todo,changeChecked } = this.props
        return (<ul className="todo-main">
            {todo.map(item => <Item {...item} key={item.id} changeChecked={changeChecked}/>)}
        </ul>
        )
    }
}
