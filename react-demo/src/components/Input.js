import React from 'react'
import ReactDOM from 'react-dom'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.value = 'hello'
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

ReactDOM.render(<Input/>, document.body)
