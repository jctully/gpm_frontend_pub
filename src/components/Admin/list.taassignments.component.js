/*
Need to list each student.

Get all TAAssignment objects.

For each student go through TAAssignment objects and get all that have student id.
Count this number and display this field
Display each class and quarter in table. Max 4-5 entries? Will students ever TA more then this?
*/

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Popup from 'reactjs-popup';

/*
import EditTodo from "./edit-todo.component";
*/

const Student = (props) => (
    <tr>
        <td className='student'>
            <Link to={"/admin/student/"+props.student._id+"/tasks"}>{props.student.student_name}</Link>
        </td>
        <td>{props.student.numassignments}</td>

        {/* how to print proper num of tds based on num of assignments */}
        { props.student.taassignments }

        {/* prints the proper num of empty tds */}
        {Array(props.student.numemptyassignments).fill(<td></td>)}
        <td>
            <Link to={"/admin/students/edit/"+props.student._id}>Edit</Link>
        </td>
    </tr>
)

const TAAssignments = props => (
    <React.Fragment>
        <td>{props.currentAssignment}</td>>
    </React.Fragment>
    
)

function getTAAssignments() {
    return axios.get('https://www.gpmbackend.com/tassignment'); 
}

function getStudents() {
    return axios.get('https://www.gpmbackend.com/students'); 
}

export default class TAAssignmentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        Promise.all([getStudents(), getTAAssignments()])
            .then(axios.spread((studentsResponse, assignmentsResponse) => {
                
                this.setState({students: studentsResponse.data});
                console.log(this.state.students);
                // const assignmentz = assignmentsResponse.data;
                // console.log(assignmentz)
                this.setState({taassignments: assignmentsResponse.data});
                console.log(this.state.taassignments);

                var listOStudents = []
                this.state.students.forEach((student) => {
                    var listOAssignments = []
                    console.log(student);
                    this.state.taassignments.forEach((taassignment) => {
                        console.log(taassignment);
                        if(student._id === taassignment.student_id){
                            console.log("ya same!");
                            const taa = [taassignment.student_id, taassignment.class_name, taassignment.ta_qtr, taassignment.ta_year, taassignment._id];
                            listOAssignments.push(taa);
                            // class_name: "CSCI 301"
                            // student_id: "5d94eb6efb8539513126219d"
                            // ta_qtr: "Fall"
                            // ta_year: "2023"
                            // __v: 0
                            // _id: "5dc233926f118e27fc793686"
                        }
                    });
                    student.taassignments = listOAssignments;
                    student.numassignments = listOAssignments.length;
                    student.numemptyassignments = 4 - listOAssignments.length;
                    listOStudents.push(student);
                });
                console.log(listOStudents);
                this.setState({students: listOStudents});
            }));
    }

    studentList() {
        return this.state.students.map((currentStudent, i) =>{
            return <Student student={currentStudent} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h3>TA Assignment List</h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Number of Times TAed</th>
                            <th>TA Assignment 1</th>
                            <th>TA Assignment 2</th>
                            <th>TA Assignment 3</th>
                            <th>TA Assignment 4</th>
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
