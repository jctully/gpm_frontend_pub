import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

import Admin from "./pages/Admin";
import AdminTasks from "./components/Student/task.student";
import CreateStudent from "./components/Admin/create.student.component";
import CreateTask from "./components/Admin/create.student.task.component";

import Student from "./pages/Student";
import StudentTasks from "./components/Admin/task.admin";
import Todo from "./components/Todo/todo.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" render={() => (
              <div className="App">
                <Home />
              </div>
            )}  />
          <Route
            exact={true}
            path="/login"
            render={() => (
              <div className="App">
                <Login />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/todo"
            render={() => (
              <div className="App">
                <Todo />
              </div>
            )}
          />
          <Route
            exat={true}
            path="/student"
            render={() => (
              <div className="App">
                <Student />
              </div>
            )}
          />
          <Route
            exat={true}
            path="/forms.student"
            render={() => (
              <div className="App">
                <StudentTasks />
              </div>
            )}
          />

          <Route
            exat={true}
            path="/admin"
            render={() => (
              <div className="App">
                <Admin />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
