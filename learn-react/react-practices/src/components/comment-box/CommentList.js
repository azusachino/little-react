import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

export default class CommentList extends PureComponent {

  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  render() {
    const {comments} = this.props;
    return (
      <div className="comment-list">
        {comments.map(c => <CommentItem key={c.author + c.comment} comment={c}/>)}
      </div>
    )
  }
}
