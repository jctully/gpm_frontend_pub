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