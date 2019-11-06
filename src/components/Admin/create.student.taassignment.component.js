import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default class CreateTAAssignment extends Component {

    constructor(props) {
        super(props);

        this.onChangeClassName = this.onChangeClassName.bind(this);
        this.onChangeTAQtr = this.onChangeTAQtr.bind(this);
        this.onChangeTAYear = this.onChangeTAYear.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            class_name: '',
            ta_qtr:     '',
            ta_year:    '',
            student_id: '',

            students: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/students/')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <option value={currentStudent._id}>{currentStudent.student_name}</option>;
        })
    }

    onChangeClassName(e) {
        this.setState({
            class_name: e.target.value
        });
    }

    onChangeTAQtr(e) {
        this.setState({
            ta_qtr: e.target.value
        });
    }

    onChangeTAYear(e) {
        this.setState({
            ta_year: e.target.value
        });
    }

    onChangeStudent(e) {
        this.setState({
            student_id: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`TA Qtr: ${this.state.ta_qtr}`);
        console.log(`TA Year: ${this.state.ta_year}`);

        const newTAAssignment = { // rename this to new ta assignment?
            class_name: this.state.class_name,
            ta_qtr: this.state.ta_qtr,
            ta_year:    this.state.ta_year,

            student_id: this.state.student_id,
        };

        axios.post('https://www.gpmbackend.com/tassignment/add', newTAAssignment)
            .then(res => console.log(res.data));


        this.setState({
            class_name: '',
            ta_qtr: '',
            ta_year: '',

            student_id: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New TA Assignment</h3>
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                        <Dropdown className='inline'>
                            <DropdownButton  drop='down' title='Class'>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ class_name: "CSCI 141" }); } }>CSCI 141
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ class_name: "CSCI 145" }); } }>CSCI 145
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ class_name: "CSCI 241" }); } }>CSCI 241
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ class_name: "CSCI 247" }); } }>CSCI 247
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ class_name: "CSCI 301" }); } }>CSCI 301
                                </Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.class_name}
                            onChange={this.onChangeClassName}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <Dropdown className='inline'>
                            <DropdownButton  drop='down' title='Quarter'>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_qtr: "Fall" }); } }>Fall
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_qtr: "Winter" }); } }>Winter
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_qtr: "Spring" }); } }>Spring
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_qtr: "Summer" }); } }>Summer
                                </Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ta_qtr}
                            onChange={this.onChangeTAQtr}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <Dropdown className='inline'>
                            <DropdownButton  drop='down' title='Year'>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2016" }); } }>2016
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2017" }); } }>2017
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2018" }); } }>2018
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2019" }); } }>2019
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2020" }); } }>2020
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2021" }); } }>2021
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2022" }); } }>2022
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2023" }); } }>2023
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    this.setState({ ta_year: "2024" }); } }>2024
                                </Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ta_year}
                            onChange={this.onChangeTAYear}
                            readOnly
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Assigned Student: &nbsp;</label>
                        <select value={this.state.student_id} onChange={this.onChangeStudent}>
                            { this.studentList() }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create TA Assignment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
