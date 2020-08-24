import React from 'react'

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>{this.props.messages.map(m => <l1>{m}</l1>)}</ul>
    )
  }
}

export class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: ""
  }
  handleInput = evt => {
    this.setState({
      inPutMsg: evt.target.inputMsg
    })
  }
  handleSend = () =>{
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
          <input value={this.state.inputMsg} />
          <button onClick={this.handleSend}>Send</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default ChatApp
