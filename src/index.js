import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
