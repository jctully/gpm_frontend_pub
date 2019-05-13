import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopBar from "../_components/TopBar";
import Menu from "../_components/Menu"
import { userService } from '../_services/user.service'

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
        users: null
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Portal</h3>
        {users &&
                        <ul>
                            {users.map(user =>
                                <li key={user.id}>{user.firstName} {user.lastName}</li>
                            )}
                        </ul>
                    }
      </div>
    );
  }
}
