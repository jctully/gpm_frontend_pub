import React, { Component } from "react";
import { userService } from '../_services/user.service'

import TopBar from "../_components/TopBar";
import Menu from "../_components/Menu"

export default class Student extends Component {
  constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

  render(  ) {
    const { user, users } = this.state; 
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Student information</h3>
        <h4>Hi {user.firstName}</h4>
      </div>
    );
  }
}
