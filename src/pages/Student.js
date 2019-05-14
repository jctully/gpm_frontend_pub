import React, { Component } from "react";


import { userService } from '../services/user.service'
import { authenticationService } from '../services/authentication.service';

import TopBar from "../components/TopBar";
import Menu from "../components/Menu"
import StudentTasks from "../components/Student/student.tasks.component";


export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: authenticationService.currentUserValue,
        userFromApi: null
    };
}

componentDidMount() {
    const { currentUser } = this.state;
    userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
}

render() {
    const { currentUser, userFromApi } = this.state;
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Student information</h3>

        {userFromApi &&
            <ul>
                <li>{userFromApi.firstName} {userFromApi.lastName}</li>
            </ul>
        }
      </div>
    );
  }
}
