import React, { Component } from 'react'
import { render } from 'react-dom'

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false }
  }

  handleClick(e) {
    this.setState({liked: !this.state.liked})
  }

  render() {
    const txt = this.state.liked ? 'like' : 'haven\'t liked'
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {txt} this. Click to toggle.
      </p>
    )
  }
}

render(<LikeButton />, document.getElementById('example'))
