package com.example.springplusreactpractic.services;

import com.example.springplusreactpractic.models.Student;
import com.example.springplusreactpractic.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

//    private static final Logger LOGGER = LoggerFactory.getLogger(StudentService.class);

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {

        return studentRepository.findAll(Sort.by(Sort.Direction.ASC, "studentId"));
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

    public Student getStudentById(Long studentId) {
        boolean result = studentRepository.existsById(studentId);
        if (!result)
            throw new IllegalStateException("Student by "
                    + studentId + " not founded");
        Optional<Student> student = studentRepository.findById(studentId);
        return student.get();
    }

        @Transactional
        public void updateStudent(Long studentId, Student student) {
//            LOGGER.info(String.valueOf(studentId) + " PARAMS HERE " + student.getStudentName() + " " +student.getStudentSurname());
            Optional<Student> studentUpdate = studentRepository.findById(studentId);
            if (!studentUpdate.isPresent()) {
                throw new IllegalStateException("Student by "
                        + studentId + " not founded");
            } else {
                if (student.getStudentName() != null && student.getStudentName().length() > 0
                        && !student.getStudentName().equals(studentUpdate.get().getStudentName()))
                    studentUpdate.get().setStudentName(student.getStudentName());
                if (student.getStudentSurname() != null && student.getStudentSurname().length() > 0
                        && !student.getStudentSurname().equals(studentUpdate.get().getStudentSurname()))
                    studentUpdate.get().setStudentSurname(student.getStudentSurname());
                if (student.getDateOfBirthday() != null &&
                        !studentUpdate.get().getDateOfBirthday().equals(student.getDateOfBirthday()))
                    studentUpdate.get().setDateOfBirthday(student.getDateOfBirthday());
            }
        }
}
