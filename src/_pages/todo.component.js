import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "../_components/Todo/create-todo.component";
import EditTodo from "../_components/Todo/edit-todo.component";
import TodosList from "../_components/Todo/todos-list.component";
import Home from "../_pages/Home";
import App from "../App";

export default class Todo extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" render={() => (
              <div className="App">
              <App />
              </div>
          )}/>

          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/">Home</a>
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                      <li className="navbar-item"><Link to="/todo" className="nav-link">Todos</Link></li>
                      <li className="navbar-item"><Link to="/todo/create" className="nav-link">Create Todo</Link></li>
                  </ul>
                </div>
            </nav>
            <br/>

            <Route path="/todo/" exact component={TodosList} />
            <Route path="/todo/edit/:id" component={EditTodo} />
            <Route path="/todo/create" component={CreateTodo} />
          </div>
        </div>
      </Router>
    );
  }
}
