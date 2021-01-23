import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Forms from './Forms';
import FAQ from './FAQ';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/forms" component={Forms} />
      <Route path="/faq" component={FAQ} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
