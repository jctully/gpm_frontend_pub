import React, { Component } from "react";
import { userService } from '../_services/user.service'

import TopBar from "../_components/TopBar";
import Menu from "../_components/Menu"
import StudentTasks from "../_components/Todo/Student/student.tasks.component";

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
    const userData = user;
    const { user, users } = this.state;
    return (
      <div>
        <TopBar data={userData}/>
        <Menu />
        <h3>Welcome to portal</h3>
        <h4>Hi {user.firstName}</h4>
      </div>
    );
  }
}
