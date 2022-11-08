package com.example.springplusreactpractic.services;

import com.example.springplusreactpractic.models.Student;
import com.example.springplusreactpractic.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean result = studentRepository.existsById(studentId);
        if (!result)
            throw new IllegalStateException("Student by "
                    + studentId + " not founded");
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long studentId, String studentName,
                              String studentSurname) {
        Optional<Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            throw new IllegalStateException("Student by "
                    + studentId + " not founded");
        } else {
            if (studentName != null && studentName.length() > 0
                    && !student.get().getStudentName().equals(studentName))
                student.get().setStudentName(studentName);
            if (studentSurname != null && studentSurname.length() > 0
                    && !student.get().getStudentSurname().equals(studentSurname))
                student.get().setStudentSurname(studentSurname);
        }
    }
}
