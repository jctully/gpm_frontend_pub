import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { hasRole, isAllowed } from "./auth";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./_pages/Login";
import Home from "./_pages/Home";
import Info from "./_pages/Info";
import Admin from "./_pages/Admin";
import Forms from "./_pages/Forms";
import Student from "./_pages/Student";
import Todo from "./_pages/todo.component"

const user = {
  roles: ['user']
};

const faculty = {
    roles: ['user', 'faculty']
}
const admin = {
  roles: ['user', 'faculty', 'admin'],
};

class App extends Component {
  render() {
    return (
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/info" component={Info}/>
              {hasRole(user, ['admin']) && <Route path="/admin" component={Admin}/>}
              {hasRole(user, ['user']) && <Route path="/student" component={Student}/>}
              <Route path="/todo" component={Todo}/>
              <Route path="/forms" component={Forms}/>
              <Route path="/login" exact component={Login}/>
            </Switch>
         </Router>
      // <Router>
      //   <div>
      //     <Route
      //       exact={true}
      //       path="/"
      //       render={() => (
      //         <div className="App">
      //           <Home />
      //         </div>
      //       )}
      //     />
      //   <Route
      //     exact={true}
      //     path="/login"
      //     render={() => (
      //       <div className="App">
      //         <Login />
      //       </div>
      //     )}
      //   />
      //   <Route
      //     exact={true}
      //     path="/info"
      //     render={() => (
      //       <div className="App">
      //         <Info />
      //       </div>
      //     )}/>
      //   <Route
      //     exact={true}
      //     path="/todo"
      //     render={() => (
      //       <div className="App">
      //         <Todo />
      //       </div>
      //     )}/>
      //   <Route
      //     exat={true}
      //     path="/portal"
      //     render={() => (
      //       <div className="App">
      //         <Portal />
      //       </div>
      //     )}
      //   />
      //    <Route
      //     exat={true}
      //     path="/forms"
      //     render={() => (
      //       <div className="App">
      //         <Forms />
      //       </div>
      //     )}
      //   />
      //    <Route
      //     exat={true}
      //     path="/student"
      //     render={() => (
      //       <div className="App">
      //         <Student />
      //       </div>
      //     )}
      //   />
      //  </div>
      // </Router>
    );
  }
}

const rootElement = document.getElementById('root');

export default App;
