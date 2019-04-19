import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Todo from "./components/Todo/todo.component"

import logo from "./logo.svg";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
        </div>
        <Route exact={true} path="/login" render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
        <Route exact={true} path="/info" render={() => (
            <div className="App">
              <Info />
            </div>
          )}/>
        <Route exact={true} path="/todo" render={() => (
            <div className="App">
              <Todo />
            </div>
          )}/>
      </Router>
    );
  }
}

export default App;