// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';
import Creations from './components/Creations';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/creations" component={Creations} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

