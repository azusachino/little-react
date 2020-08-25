import React from 'react'

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import withTimer from "../with-timer";

import './index.css'

const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bod", content: "Hello Rekit!" }
]

export class CommentBox extends React.PureComponent {
  render() {

    return (
      <div className="comment-box">
        <h1>Comments ({comments.length})</h1>
        <CommentList comments={comments} />
        <CommentForm />
        {this.props.time.getTime()}
      </div>
    )
  }
}

export default withTimer(CommentBox)

