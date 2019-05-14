import React, { Component } from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import  Login  from "./pages/Login";
import Home from "./pages/Home";

import { history } from './helpers/history';
import { Role } from './helpers/role';
import { authenticationService } from './services/authentication.service';
import { PrivateRoute } from './components/PrivateRoute';

import Admin from "./pages/Admin";
import AdminTasks from "./components/Student/task.student";
import CreateStudent from "./components/Admin/create.student.component";
import CreateTask from "./components/Admin/create.student.task.component";

import Student from "./pages/Student";
import StudentTasks from "./components/Admin/task.admin";
import Todo from "./components/Todo/todo.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null,
        isAdmin: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
    }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }
  
  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={ history }>
        <div>
          {currentUser &&
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                  <div className="navbar-nav">
                      <Link to="/" className="nav-item nav-link">Home</Link>
                      {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                      <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                  </div>
              </nav>
          }
          
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/student" roles={[Role.User]} component={Student} />
          <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
          <Route path="/login" component={Login} />

        </div>

        {/* <div>
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
        </div> */}
      </Router>
    );
  }
}

export default App;
