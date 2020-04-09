import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from '../../store-thunk'
import { CHANGE_INPUT_VALUE } from '../../store-thunk/actionTypes'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

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
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input placeholder='please input your todo' style={{ width: '300px', marginLeft: 10 }}/>
          <Button type='primary' onClick={this.handlerSubmit}>Submit</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList
