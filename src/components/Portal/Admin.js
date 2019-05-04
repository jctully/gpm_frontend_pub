import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopBar from "./TopBar";
import Menu from "./Menu"
import CreateStudent from "../Admin/create.student.component";
import StudentsList from "../Admin/list.students.component";
import CreateTask from "../Admin/create.student.task.component";

export default class Admin extends Component {
  render(  ) {
    return (
      <Router>
        <div>
          <TopBar />
          <Menu />
          <h3>Admin portal</h3>
          
          <Link to="/admin">
            <button className="button">Admin homepage</button>
          </Link>
          
          <Link to="/admin/create/student">
            <button className="button">Create Student</button>
          </Link>

          <Link to="/admin/create/task">
            <button className="button">Create Task</button>
          </Link>
          {/*
          <a href="/admin/create/student">
            <button className="button">Create Student</button>
          </a>
          <a href="/admin/create/task">
            <button className="button">Create Task</button>
          </a>
          */}
          {/*<StudentsList />*/}

          <Route path="/admin/" exact component={StudentsList} />
          <Route path="/admin/create/student" component={CreateStudent} />
          <Route path="/admin/create/task" component={CreateTask} />
          {/*<Route path="/admin/student/tasks" component={CreateTask} />*/}
          {/*<Route path="/admin/edit/:id" component={EditTodo} />*/}

        </div>
      </Router>
    );
  }
}