import React, {PureComponent} from "react"

export default class CommentForm extends PureComponent {
  // static propTypes = {
  //   comments: PropTypes.object.isRequired
  // };

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={evt => evt.preventDefault()}>
          <textarea style={{
            display: "block",
            width: "100%"
          }}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
