import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardRoute from './DashboardRoute';

import { AuthorizationPage, MainPage } from '../pages';

const RouteSchema = () => (
  <Router>
    <Switch>
      <Route exact path="/auth" component={AuthorizationPage} />

      <DashboardRoute exact path="/" component={MainPage} />

      <Route exact component={() => <h1 className="text-center"> 404 </h1>} />
    </Switch>
  </Router>
);

export default RouteSchema;