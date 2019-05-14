import React, { Component } from "react";

import TopBar from "../components/TopBar";
import Menu from "../components/Menu"
import StudentTasks from "../components/Student/student.tasks.component";

export default class Student extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Student information</h3>
      </div>
    );
  }
}
