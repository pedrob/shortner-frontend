import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { useAuth } from "./hooks/auth";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const { isAuthenticated } = useAuth();

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = props => {
  return isAuthenticated() ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/registrar" exact component={RegisterPage} />
        <Route
          path="/*"
          exact
          component={() => <h1>Página não encontrada</h1>}
        />
      </Switch>
    </Router>
  );
}
