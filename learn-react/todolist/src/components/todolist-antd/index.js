import React, {Component} from 'react'
import store from '../../store'
import {CHANGE_INPUT_VALUE} from '../../store/actionTypes'
import TodoListUI from './indexUI'


class TodoList extends Component {

  constructor(props) {
    super(props)
    this.setState(
      store.getState()
    )
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
  }

  handleSubmit() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInput}
        handleSubmit={this.handleSubmit}/>
    )
  }
}

export default TodoList
