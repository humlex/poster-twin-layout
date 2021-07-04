import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardRoute from "./DashboardRoute";

import {
  AuthorizationPage,
  MainPage,
  ClientsPage,
  WorkersPage,
} from "../pages";

const RouteSchema = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AuthorizationPage} />
      <DashboardRoute exact path="/home" component={MainPage} />
      <DashboardRoute exact path="/clients" component={ClientsPage} />
      <DashboardRoute exact path="/workers" component={WorkersPage} />

      <Route exact component={() => <h1 className="text-center"> 404 </h1>} />
    </Switch>
  </Router>
);

export default RouteSchema;
