import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch } from 'react-router-dom';
import LinksContainer from '../containers/linkscontainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Link to='/links'>All Links</Link>

      <h2> 💯🔥🙏👌 Meme-ddit 👌🙏🔥💯 </h2>

      <Route path='/links' component={LinksContainer} />
    </div>
  );
}

export default App;
