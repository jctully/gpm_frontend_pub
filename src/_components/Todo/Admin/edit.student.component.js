import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentUsername = this.onChangeStudentUsername.bind(this);
        this.onChangeWesternId = this.onChangeWesternId.bind(this);
        this.onChangeAdmissionQtr = this.onChangeAdmissionQtr.bind(this);;
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    student_name: response.data.student_name,
                    student_username: response.data.student_username,
                    western_id: response.data.western_id,
                    admission_qtr: response.data.admission_qtr
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value
        });
    }

    onChangeStudentUsername(e) {
        this.setState({
            student_username: e.target.value
        });
    }

    onChangeWesternId(e) {
        this.setState({
            western_id: e.target.value
        });
    }

    onChangeAdmissionQtr(e) {
        this.setState({
            admission_qtr: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_name: this.state.student_name,
            student_username: this.state.student_username,
            western_id: this.state.western_id,
            admission_qtr: this.state.admission_qtr
        };
        console.log(obj);
        axios.post('http://localhost:4000/students/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Student Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Student Username: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.student_username}
                                onChange={this.onChangeStudentUsername}
                                />
                    </div>

                    <div className="form-group">
                        <label>Western Id: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.western_id}
                                onChange={this.onChangeWesternId}
                                />
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Student" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
