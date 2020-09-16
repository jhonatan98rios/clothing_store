import React from 'react';
import Home from '../pages/Home'
import Product from '../pages/Product'

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

        <Route path="/product/:storeId/:productId">
          <Product />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default Routes;
