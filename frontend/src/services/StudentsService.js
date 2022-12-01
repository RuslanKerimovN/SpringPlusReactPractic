import axios from "axios";

const STUDENT_URL = "http://localhost:8080/";
const ADD_STUDENT_URL = "http://localhost:8080/add-student";
const REMOVE_STUDENT_URL = "http://localhost:8080/delete";
const UPDATE_STUDENT_URL = "http://localhost:8080/update";

class StudentService {

    getStudents() {
        return axios.get(STUDENT_URL);
    }

    addStudent(student) {
        return axios.post(ADD_STUDENT_URL, student);
    }

    removeStudent(studentId) {
        return axios.delete(REMOVE_STUDENT_URL + '/' + studentId);
    }

    updateStudent(id, student) {
        return axios.put(UPDATE_STUDENT_URL + '/' + id, student);
    }
}

export default new StudentService()