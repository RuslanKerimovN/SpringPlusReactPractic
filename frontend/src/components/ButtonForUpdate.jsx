import React, { Component } from 'react';

class ButtonForUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentId:''
        }

        this.updateStudent = this.updateStudent.bind(this);
    }

    updateStudent(studentId) {
        window.location.href = '/update/' + studentId;
        console.log(studentId);
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.updateStudent(this.state.studentId)}>Update</button> 
            </div>
        );
    }
}

export default ButtonForUpdate;