import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentsService from '../services/StudentsService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentId: '',
            studentName: '',
            studentSurname: '',
            dateOfBirthday: ''
        }

        this.updateStudentNameHanlder = this.updateStudentNameHanlder.bind(this);
        this.updateStudentSurnameHanlder = this.updateStudentSurnameHanlder.bind(this);
        this.updateStudentDateOfBirthdayHanlder = this.updateStudentDateOfBirthdayHanlder.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    updateStudentNameHanlder= (event) => {
        this.setState({studentName: event.target.value});
    }

    updateStudentSurnameHanlder= (event) => {
        this.setState({studentSurname: event.target.value});
    }

    updateStudentDateOfBirthdayHanlder= (event) => {
        this.setState({dateOfBirthday: event.target.value})
    }

    updateStudent = (element) => {
        element.preventDefault();

        let student = 
        {
            studentId: this.state.studentId,
            studentName: this.state.studentName, 
            studentSurname: this.state.studentSurname,
            dateOfBirthday: this.state.dateOfBirthday
        };
        console.log(JSON.stringify(student));

        //StudentsService.updateStudent(student);
        //window.alert('Student was Updated')
        //window.location.href = '/';
    }

    render() {
        return (
            <div className='update-student-form'>
                <div>
                    <h1>Update Student Form</h1>
                    <div>
                        <form>
                            <div>
                            <div>
                                <label className='update-student-form-lebel'> Name: </label>
                                <div>
                                    <input placeholder="Student Name" value={this.state.studentName}
                                        onChange={this.updateStudentNameHanlder}/>
                                </div>
                            </div>
                                <label className='update-student-form-lebel'> Surname: </label>
                                <div>
                                    <input placeholder="Student Surname" value={this.state.studentSurname} 
                                        onChange={this.updateStudentSurnameHanlder}/>
                                </div>
                            </div>
                            <div>
                                <label className='update-student-form-lebel'> DirthDay: </label>
                                <div>
                                    <input placeholder="Student Birth Day" value={this.state.dateOfBirthday}
                                        onChange={this.updateStudentDateOfBirthdayHanlder}/>
                                </div>
                            </div>
                            <div>
                                <button className='button-accept' onClick={this.updateStudent}>
                                    UPDATE
                                </button>
                                <Link to='/'>
                                    <button>CANCEL</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;