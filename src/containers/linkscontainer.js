import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL" });
  };

  getSingleLink = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE", id: id });
  }

  render() {
    const { links } = this.props;

    return (
      <Links
        state={links}
        getAllLinks={this.getAllLinks}
        getSingleLink={this.getSingleLink}
      />
    );
  }
}

export default connect(state => state)(LinksContainer);
