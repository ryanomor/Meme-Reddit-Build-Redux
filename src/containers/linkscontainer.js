import React from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getSingleLink = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE", id: id });
  }

  addLink = (memeObj) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_ONE", meme: memeObj });
  };

  getAllComments = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "SHOW_COMMENTS", id });
  };

  addComment = (meme, newComment) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_COMMENT", meme, newComment});
  };

  render() {
    const { links, comments } = this.props;

    return (
      <Links
        linksState={links}
        commentsState={comments}
        getSingleLink={this.getSingleLink}
        addLink={this.addLink}
        getAllComments={this.getAllComments}
        addComment={this.addComment}
      />
    );
  }
}

export default connect(state => state)(LinksContainer);
