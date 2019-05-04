import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Task = props => (
    <tr>
        <td className='task'>
            {props.task.task_name}
        </td>
        {/*
        <td>
            <Link to={"/admin/student/edit/student/"+props.student._id}>Edit</Link>
        </td>
        */}
    </tr>
)

export default class StudentTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/')
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    taskList() {
        return this.state.tasks.map(function(currentTask, i){
            return <Task task={currentTask} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Student Name goes here</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Task Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.taskList() }
                    </tbody>
                </table>
            </div>
        )
    }
}