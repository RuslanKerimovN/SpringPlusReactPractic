import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentsService from '../services/StudentsService';
import './ComponentsStyle.css';

class ListStudentsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        StudentsService.getStudents().then((res) => {
            this.setState({students: res.data});
        });
    }

    updateStudent(id) {
        window.location.href = '/update/' + id;
        
    }

    deleteStudent(studentId) {
        StudentsService.removeStudent(studentId);
        window.location.href = '/';
    }

    render() {
        return (
            <div className='student-desk'>
                <h2 className='header header-of-students-list'>Students List</h2>
                    <Link to='/add-student'>
                        <button className='add-student'> Add Student </button>
                    </Link>
                    <Link to='/delete'>
                        <button className='delete'> Delete Student </button>
                    </Link>
                            <div>
                                <table className='table table-students-list' align='center' border={1}>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Student name</th>
                                            <th>Student surname</th>
                                            <th>Student birthday</th>
                                            <th>Student age</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.students.map(
                                                students =>
                                                <tr key = {students.id}>
                                                    <th> {students.studentId}</th>
                                                    <td> {students.studentName} </td>
                                                    <td> {students.studentSurname} </td>
                                                    <td> {students.dateOfBirthday} </td>
                                                    <td> {students.studentAge} </td>
                                                    <td> 
                                                        <button onClick={() => this.updateStudent(students.studentId)}>Update</button> 
                                                        <button onClick={() => this.deleteStudent(students.studentId)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
            </div>
        );
    }
}

export default ListStudentsComponents;