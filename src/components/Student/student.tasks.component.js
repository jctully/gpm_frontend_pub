import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Task = props => (
    <tr>
        {/* Maybe if completed put green check box here somehow */}
        <td className={props.task.task_completed ? 'completed' : ''}>
            {props.task.task_name}
        </td>
        <td className='task'>
            {props.task.task_description}
        </td>
        <td className='task'>
            {props.task.task_link}
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
        axios.get('http://localhost:4000/tasks/student/'+this.props.match.params.id)
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
                <h3>Student Id: {this.props.match.params.id}</h3>
                <h5>Task List</h5>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Link</th>
                            <th>Edit?</th>
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