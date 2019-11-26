import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Portal from './components/Portal/Portal';
import Forms from './components/Portal/Forms';
import Student from './components/Portal/Student';
import Todo from './components/Todo/todo.component';
import Admin from './components/Portal/Admin';
// import CreateStudent from "./components/Admin/create.student.component";
// import CreateTask from "./components/Admin/create.student.task.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/login' component={Login} />
          <Route exact={true} path='/todo' component={Todo} />
          <Route exact={true} path='/portal' component={Portal} />
          <Route exact={true} path='/forms' component={Forms} />
          <Route exact={true} path='/student' component={Student} />
          <Route exact={true} path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
