import React, { Component } from 'react';
import './ComponentsStyle.css';
import { Link } from 'react-router-dom';
import StudentsService from '../services/StudentsService';

class DeleteStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentId: '',
        }

        this.changeStudentIdHanlder = this.changeStudentIdHanlder.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    changeStudentIdHanlder = (event) => {
        this.setState({studentId: event.target.value});
    }


    deleteStudent = (element) => {
        element.preventDefault();

        let student = this.state.studentId;
        console.log(JSON.stringify(student));

        StudentsService.removeStudent(student);
        
        window.location.href = '/';
    }
        

    render() {
        return (
            <div className='delete-student-form'>
                <h1 className='delete-header'>Delete Student Form</h1>
                <form>
                    <h2>Enter id student</h2>
                    <div>
                        <input placeholder="Student id" value={this.state.studentId} 
                            onChange={this.changeStudentIdHanlder}/>
                    </div>
                    <div>
                        <button onClick={this.deleteStudent}>Accept</button>
                        <Link to='/'>
                            <button>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteStudentComponent;