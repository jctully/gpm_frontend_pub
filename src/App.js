import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { history } from './_helpers/history';
import { Role } from './_helpers/role';
import { authenticationService } from './_services/authentication.service';
import { PrivateRoute } from './_components/PrivateRoute';

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./_pages/Login";
import Home from "./_pages/Home";
import Info from "./_pages/Info";
import Admin from "./_pages/Admin";
import Forms from "./_pages/Forms";
import Student from "./_pages/Student";
import Todo from "./_pages/todo.component"

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
      <Router history={history}>
        <Switch>
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
          
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
            <Route path="/login" component={Login} />
        </div>
          

          {/* <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          {hasRole(user, ['admin']) && <Route path="/admin" component={Admin} />}
          {hasRole(user, ['user']) && <Route path="/student" component={Student} />}
          <Route path="/todo" component={Todo} />
          <Route path="/forms" component={Forms} />
          <Route path="/login" exact component={Login} /> */}
          
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
