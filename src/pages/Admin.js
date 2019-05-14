import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Menu from "../components/Menu"
import CreateStudent from "../components/Admin/create.student.component";
import StudentsList from "../components/Admin/list.students.component";
import CreateTask from "../components/Admin/create.student.task.component";
import Student from "../pages/Student";
import StudentTasks from "../components/Student/student.tasks.component";
import EditTask from "../components/Admin/edit.task.component";
import EditStudent from "../components/Admin/edit.student.component";

export default class Admin extends Component {
  render(  ) {
    return (
      <Router>
        <div>
          <TopBar />
          <Menu />
          <h3>Admin portal</h3>
          
          <Link to="/admin">
            <button className="button">Portal</button>
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

          <Route path="/admin/student/:id/tasks" component={StudentTasks} />
          
          <Route path="/admin/students/edit/:id" component={EditStudent} />
          <Route path="/admin/tasks/edit/:id" component={EditTask} />

          {/*<Route path="/admin/student/tasks" component={CreateTask} />*/}
          {/*<Route path="/admin/edit/:id" component={EditTodo} />*/}

        </div>
      </Router>
    );
  }
}