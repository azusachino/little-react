import React, { Component, Fragment } from 'react'
import './index.css'

import TodoItem from '../todoitem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = { // immutable state
      inputValue: 'wh',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTodoListFinish = this.handleTodoListFinish.bind(this)
  }

  handleInputChange(e) {
    const val = e.target.value
    this.setState(() => ({
      inputValue: val
    }))
  }

  handleSubmit() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleTodoListFinish(index) {
    let list = this.state.list
    list.splice(index, 1)

    this.setState(() => {
      let list = this.state.list
      list.splice(index, 1)
      return { list }
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <label htmlFor='insertArea'>输入内容</label>
            <input id='insertArea'
                   value={this.state.inputValue}
                   className='input'
                   onChange={this.handleInputChange}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
          <div>
            <ul>
              {
                this.state.list.map((item, index) => {
                  return <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleTodoListFinish}
                  />
                })
              }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TodoList
