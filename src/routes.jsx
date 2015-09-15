/*jshint esnext: true*/

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App.jsx';
import Index from './components/Index.jsx';
import Products from './components/products/Products.jsx';
import Product from './components/products/Product.jsx';
import NotFound from './components/NotFound.jsx';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="products" component={Products}/>
    <Route path="products/:productId" component={Product}/>
  </Route>
);

export {routes as default}
