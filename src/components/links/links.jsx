import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';

const Links = ({ state, getAllLinks, getSingleLink }) => {
  const renderLinkList = () => {
    return (
      <LinkList state={state} getAllLinks={getAllLinks} />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink state={state} getSingleLink={getSingleLink} id={id} />
    )
  }

  return (
    <div>
      <Route exact path='/links' render={renderLinkList} />
      <Route path='/links/:id' render={renderSingleLink} />
    </div>
  )
}

export default Links;
