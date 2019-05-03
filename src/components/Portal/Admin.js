import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopBar from "./TopBar";
import Menu from "./Menu"
import CreateStudent from "../Admin/create.student.component";
import ListStudents from "../Admin/list.students.component";
import CreateTask from "../Admin/create.student.task.component";

export default class Admin extends Component {
  render(  ) {
    return (
      <Router>
        <div>
          <TopBar />
          <Menu />
          <h3>Admin portal</h3>
          <a href="/admin/create/student">
            <button className="button">Create Student</button>
          </a>
          <a href="/admin/create/task">
            <button className="button">Create Task</button>
          </a>
          <ListStudents />
        </div>

        {/*
        <Route path="/admin/" exact component={ListStudents} />
        <Route path="/admin/create/student" component={CreateStudent} />
        <Route path="/admin/create/task" component={CreateTask} />
        *<Route path="/admin/edit/:id" component={EditTodo} />*
        */}
      </Router>
    );
  }
}