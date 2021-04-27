import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./loginPage";
import RecentMessagePage from "./recentMessagePage";
import RegisterPage from "./registerPage";
import TestPage from "./testPage";
import { socket, SocketContext } from "../context/socket";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/test">
          <TestPage />
        </Route>
        <SocketContext.Provider value={socket}>
          <Route path="/message/:id">
            <RecentMessagePage />
          </Route>
          <Route exact path="/message">
            <RecentMessagePage />
          </Route>
        </SocketContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
