import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import NotFoundPage from '../containers/NotFoundPage';
import GitHubReposPage from '../containers/GitHubReposPage';

export default (
  <Route component={App}>
    <Route path="/repos/:name" component={GitHubReposPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
