import React, { Component } from 'react'
class TodoItem extends Component {

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick().bind(this)
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.content}</div>
    )
  }
}

export default TodoItem
