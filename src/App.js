import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Portal from "./components/Portal/Portal";
import Forms from "./components/Portal/Forms";
import Student from "./components/Portal/Student";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          />
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
          path="/info"
          render={() => (
            <div className="App">
              <Info />
            </div>
          )}/>
        <Route
          exat={true}
          path="/portal"
          render={() => (
            <div className="App">
              <Portal />
            </div>
          )}
        />
         <Route
          exat={true}
          path="/forms"
          render={() => (
            <div className="App">
              <Forms />
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
       </div>
      </Router>
    );
  }
}

export default App;
