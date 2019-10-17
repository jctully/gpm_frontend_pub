import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentUsername = this.onChangeStudentUsername.bind(this);
        this.onChangeWesternId = this.onChangeWesternId.bind(this);
        this.onChangeAdmissionQtr = this.onChangeAdmissionQtr.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: '',
            admission_year: ''
        }
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

    onChangeAdmissionYear(e) {
        this.setState({
            admission_year: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Student Name: ${this.state.student_name}`);
        console.log(`Student Username: ${this.state.student_username}`);
        console.log(`Western Id: ${this.state.western_id}`);
        console.log(`Admission Qtr: ${this.state.admission_qtr}`);
        console.log(`Admission Year: ${this.state.admission_year}`);

        const newStudent = {
            student_name: this.state.student_name,
            student_username: this.state.student_username,
            western_id: this.state.western_id,
            admission_qtr: this.state.admission_qtr,
            admission_year: this.state.admission_year
        };

        axios.post('https://www.gpmbackend.com/students/add', newStudent)
            .then(res => console.log(res.data));


        this.setState({
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: '',
            admission_year: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_username}
                                onChange={this.onChangeStudentUsername}
                                />
                    </div>
                    <div className="form-group">
                        <label>W#: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.western_id}
                                onChange={this.onChangeWesternId}
                                />
                    </div>
                    <div className="form-group">
                        <p>Admission Quarter:</p>
                        <Dropdown className='inline'>
                            <DropdownButton  drop='down' title='Quarter'>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_qtr: "Fall" }); } }>Fall
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_qtr: "Winter" }); } }>Winter
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_qtr: "Spring" }); } }>Spring
                                </Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.admission_qtr}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <p>Admission Year:</p>
                        <Dropdown className='inline'>
                            <DropdownButton  drop='down' title='Year'>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2016" }); } }>2016
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2017" }); } }>2017
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2018" }); } }>2018
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2019" }); } }>2019
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2020" }); } }>2020
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2021" }); } }>2021
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2022" }); } }>2022
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2023" }); } }>2023
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ admission_year: "2024" }); } }>2024
                                </Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.admission_year}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Student" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
