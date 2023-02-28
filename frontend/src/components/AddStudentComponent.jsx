import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentsService from '../services/StudentsService';

class AddStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentName: '',
            studentSurname: '',
            dateOfBirthday: ''
        }

        this.changeStudentNameHanlder = this.changeStudentNameHanlder.bind(this);
        this.changeStudentSurnameHanlder = this.changeStudentSurnameHanlder.bind(this);
        this.changeStudentBirthdayHanlder = this.changeStudentBirthdayHanlder.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    changeStudentNameHanlder= (event) => {
        this.setState({studentName: event.target.value});
    }

    changeStudentSurnameHanlder= (event) => {
        this.setState({studentSurname: event.target.value});
    }

    changeStudentBirthdayHanlder= (event) => {
        this.setState({dateOfBirthday: event.target.value});
    }

    saveStudent = (element) => {
        element.preventDefault();

        let student = {studentName: this.state.studentName, 
            studentSurname: this.state.studentSurname, 
            dateOfBirthday: this.state.dateOfBirthday};

        StudentsService.addStudent(student)
            .then((res) => {window.alert('Student was Added')
                window.location.href = '/';})
            .catch((res) => window.alert('Student dont Add'));
    }

    render() {
        return (
            <div className='add-student-form'>
                <div>
                    <h1>Add Student Form</h1>
                    <div>
                        <form>
                            <div>
                                <label className='add-student-form-lebel'> Name: </label>
                                <div>
                                    <input placeholder="Student name" value={this.state.studentName} 
                                        onChange={this.changeStudentNameHanlder}/>
                                </div>
                            </div>
                            <div>
                                <label className='add-student-form-lebel'> Surname: </label>
                                <div>
                                    <input placeholder="Student surname" value={this.state.studentSurname}
                                        onChange={this.changeStudentSurnameHanlder}/>
                                </div>
                            </div>
                            <div>
                                <label className='add-student-form-lebel'> Birthday (YYYY-MM-DD): </label>
                                <div>
                                    <input placeholder="Student birthday" value={this.state.dateOfBirthday}
                                        onChange={this.changeStudentBirthdayHanlder}/>
                                </div>
                            </div>
                            <div>
                                <button className='button-accept' onClick={this.saveStudent}>
                                    SAVE
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

export default AddStudentComponent;