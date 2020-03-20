import React from 'react'
import ReactDOM from 'react-dom'

class NotesList extends React.Component {
  render() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, (child => <li>{child}</li>))
        }
      </ol>
    )
  }
}

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById('example')
)
