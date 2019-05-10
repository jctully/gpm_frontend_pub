import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { hasRole, isAllowed } from "./auth";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login/Login";
import Home from "./_pages/Home";
import Info from "./_pages/Info";
import Admin from "./_pages/Admin";
import Forms from "./_pages/Forms";
import Student from "./Portal/Portal";
import Todo from "./_pages/todo.component"
import {PrivateRoute} from './_components/Login/PrivateRoute'

// const user = {
//   roles: ['user']
// };
//
// const faculty = {
//     roles: ['user', 'faculty']
// }
// const admin = {
//   roles: ['user', 'faculty', 'admin'],
// };

class App extends Component {
  render() {
    return (
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/info" component={Info}/>
              <PrivateRoute exact path="/admin" component={Admin}/>
              <PrivateRoute exact path="/student" component={Student}/>
              <PrivateRoute exact path="/todo" component={Todo}/>
              <PrivateRoute exact path="/forms" component={Forms}/>
              <Route exact path="/login" exact component={Login}/>
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
