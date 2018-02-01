import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch } from 'react-router-dom';
import LinksContainer from '../containers/linkscontainer';
import Home from './home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> {" "}
        <Link to='/links'>All Links</Link> {" "}
        <Link to='/links/new'>Add Meme</Link>
      </nav>

      <h2> 💯🔥🙏👌 Meme-ddit 👌🙏🔥💯 </h2>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/links' component={LinksContainer} />
      </Switch>
    </div>
  );
}

export default App;
