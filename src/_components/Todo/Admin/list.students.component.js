import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

/*
import EditTodo from "./edit-todo.component";
*/
const Student = props => (
    <tr>
        <td className='student'>
            <Link to={"/admin/student/"+props.student._id+"/tasks"}>{props.student.student_name}</Link>
        </td>
        <td>{props.student.student_username}</td>
        <td>{props.student.western_id}</td>
        <td>{props.student.admission_qtr}</td>
        <td>
            <Link to={"/admin/students/edit/"+props.student._id}>Edit</Link>
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
                            <th>Username</th>
                            <th>Western #</th>
                            <th>Admission Qtr</th>
                            <th>Edit</th>
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
