import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;
