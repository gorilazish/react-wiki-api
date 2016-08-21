import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react';
import MainLayout from './components/MainLayout';
import SearchPage from './components/SearchPage';
import SearchBar from './components/SearchBar'

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={SearchBar} />
      <Route path="search" component={SearchPage}/>
    </Route>
  </Router>
);

export default Routes;