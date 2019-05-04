/*
import React, {Component} from 'react';

export default class ListStudents extends Component {
    render() {
        return (
            <div>
                <h4>List of students managed by this admin here</h4>
                <p>Student 1 (hyperlink to student profile)</p>
                <p>Student 2</p>
                <p>Student 3</p>
                <p>Student 4</p>
            </div>
        );
    }
}
*/

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

/*
import EditTodo from "./edit-todo.component";
*/

const Student = props => (
    <tr>
        <td className='student'>
            <Link to={"/student/"+props.student._id+"/tasks"}>{props.student.name}</Link>
        </td>
        <td>
            <Link to={"/edit/student/"+props.student._id}>Edit</Link>
        </td>
    </tr>
)

export default class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <Student student={currentStudent} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.studentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
