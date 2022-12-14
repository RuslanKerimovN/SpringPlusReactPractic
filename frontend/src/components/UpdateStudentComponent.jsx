import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentsService from '../services/StudentsService';


class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentName: '',
            studentSurname: '',
            dateOfBirthday: '',
        }

        this.updateStudentNameHanlder = this.updateStudentNameHanlder.bind(this);
        this.updateStudentSurnameHanlder = this.updateStudentSurnameHanlder.bind(this);
        this.updateStudentDateOfBirthdayHanlder = this.updateStudentDateOfBirthdayHanlder.bind(this);
        this.updateStudent = this.updateStudent.bind(this);

    }

    componentDidMount() {
        StudentsService.getOneStudent(this.props.studentId).then((res) => {
            let student = res.data;
            this.setState({studentName: student.studentName,
                studentSurname: student.studentSurname,
                dateOfBirthday: student.dateOfBirthday});
        });

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

    updateStudent = () => {
        let student = 
        {
            studentName: this.state.studentName, 
            studentSurname: this.state.studentSurname,
            dateOfBirthday: this.state.dateOfBirthday
        };
        let studentId = this.props.studentId;

        StudentsService.updateStudent(studentId, student);
        window.location.href = '/';
    }

    render() {
        return (
            <div className='update-student-form'>
                <h1>Update Student Form</h1>
                <div>
                    <div>
                        <label className='update-student-form-lebel'> Name: </label>
                        <div>
                            <input value={this.state.studentName}
                                onChange={this.updateStudentNameHanlder}/>
                        </div>
                    </div>
                    <div>
                        <label className='update-student-form-lebel'> Surname: </label>
                        <div>
                            <input value={this.state.studentSurname} 
                                onChange={this.updateStudentSurnameHanlder}/>
                        </div>
                    </div>
                    <div>
                        <label className='update-student-form-lebel'> BirthDay: </label>
                        <div>
                            <input value={this.state.dateOfBirthday}
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
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;