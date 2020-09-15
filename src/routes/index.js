import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function Routes() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact={true}>
          <Home />
        </Route>

        <Route path="/about" exact={true}>
          <About />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default Routes;
