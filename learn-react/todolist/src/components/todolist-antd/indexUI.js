import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

class TodoListUI extends Component {

  render() {

    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input placeholder='please input your todo' defaultValue={this.props.inputValue}
                 style={{width: '300px', marginLeft: 10}}/>
          <Button type='primary' onClick={this.props.handlerSubmit}>Submit</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={data}
          renderItem={(item, index) => (<List.Item onClick={this.props.handleItemClick(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoListUI
