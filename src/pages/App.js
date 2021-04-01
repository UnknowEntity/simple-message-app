import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import TestPage from "./testPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/test">
          <TestPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
