import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import NewLink from './newlink';

const Links = ({ linksState, commentsState, getSingleLink, addLink, getAllComments, addComment }) => {
  const renderLinkList = () => {
    return (
      <LinkList linksState={linksState} />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink 
        linksState={linksState} 
        commentsState={commentsState}
        getSingleLink={getSingleLink} 
        getAllComments={getAllComments}
        addComment={addComment}
        id={id} 
      />
    )
  }

  return (
    <Switch>
      <Route exact path='/links' render={renderLinkList} />
      <Route exact path='/links/new' render={() => <NewLink addLink={addLink} />} />
      <Route path='/links/:id' render={renderSingleLink} />
    </Switch>
  )
}

export default Links;
