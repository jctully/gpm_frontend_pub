import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopBar from "../_components/TopBar";
import Menu from "../_components/Menu"

import CreateStudent from "../_components/Todo/Admin/create.student.component";
import StudentsList from "../_components/Todo/Admin/list.students.component";
import CreateTask from "../_components/Todo/Admin/create.student.task.component";
import Student from "../Portal/Portal";
import StudentTasks from "../_components/Todo/Student/student.tasks.component";
import EditTask from "../_components/Todo/Admin/edit.task.component";
import EditStudent from "../_components/Todo/Admin/edit.student.component";

export default class Portal extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Admin</h3>

        <Link to="/admin">
            <button className="button">Portal</button>
          </Link>

          <Link to="/admin/create/student">
            <button className="button">Create Student</button>
          </Link>

          <Link to="/admin/create/task">
            <button className="button">Create Task</button>
          </Link>

          <Route path="/admin/" exact component={StudentsList} />
          <Route path="/admin/create/student" component={CreateStudent} />
          <Route path="/admin/create/task" component={CreateTask} />

          <Route path="/admin/student/:id/tasks" component={StudentTasks} />

          <Route path="/admin/students/edit/:id" component={EditStudent} />
          <Route path="/admin/tasks/edit/:id" component={EditTask} />

      </div>
    );
  }
}
