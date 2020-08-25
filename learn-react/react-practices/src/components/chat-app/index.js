import React from 'react'
import withTimer from '../with-timer'

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>{this.props.messages.map(m => <l1>{m}</l1>)}</ul>
    )
  }
}

class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: ""
  }
  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.inputMsg
    })
  }
  handleSend = () => {
    const txt = this.state.inputMsg
    if (txt) {
      const newMessages = [...this.state.messages, txt]
      this.setState({
        messages: newMessages,
        inputMsg: ""
      })
    }
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <div>
          <input type="text" value={this.state.inputMsg} onChange={this.handleInput}/>
          <button onClick={this.handleSend}>Send</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp)
