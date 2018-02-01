import React, { Component } from 'react';

class SingleLink extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      addComment: false,
      submitted: false,
      newComment: "",
    };
  };
  
  componentDidMount () {
    this.props.getSingleLink(this.props.id);
    this.props.getAllComments(this.props.id);
  };

  toggleComments = (event) => {
    const { showComments } = this.state;
    this.setState({
      showComments: !showComments,
      addComment: false,
    });
  };

  toggleButton = (event) => {
    const { addComment, showComments, submitted } = this.state;
    showComments 
      ? this.setState({
          submitted: false,
          addComment: !addComment,
          showComments: !showComments,
        })
      : this.setState({
        submitted: false,
        addComment: !addComment});
  };

  handleNewComment = (event) => {
    const { newComment, submitted } = this.state;
    const meme = this.props.linksState.oneMeme;
    this.props.addComment(meme, newComment);
    this.setState({
      addComment: false,
      submitted: true,
      newComment: "",
    });
  };

  handleInput = (event) => {
    const newComment = event.target.value;
    this.setState({newComment});
  };

  render () {
    const { showComments, addComment, submitted, newComment } = this.state;
    const comments = this.props.commentsState.oneMeme.comments;
    return (
      <div>
        <h3>{this.props.linksState.oneMeme.title}</h3>
        <a href={this.props.linksState.oneMeme.url} target="_blank">
          <p> Go to Site </p>
        </a> {" "}
        {showComments? <button onClick={this.toggleComments}>Hide Comments</button> : <button onClick={this.toggleComments}>View Comments</button>} {" "}
        {addComment ? <button onClick={this.handleNewComment}>Submit comment</button> : <button onClick={this.toggleButton}>Add comment</button>} 
        <br />
        {submitted ? <p style={{color: "green"}}>Successfully submitted</p> : submitted }
        {showComments 
          ? <ul style={{listStyle: "none"}}>
              {comments.map(comment => 
                <li>
                  <textarea cols="30" rows="5" disabled="true">{comment.comment}</textarea>
                </li>
              )}
            </ul>
          : showComments}
          <br />
          {addComment 
            ? <textarea placeholder="Enter your comment" cols="30" rows="5" onInput={this.handleInput}>{newComment}</textarea> 
            : addComment}
      </div>
    );
  }
}

export default SingleLink;
