package com.example.springplusreactpractic.models;

import io.swagger.v3.oas.annotations.media.Schema;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "student_id")
    private Long studentId;
    @Column(name = "student_name", nullable = false)
    private String studentName;
    @Column(name = "student_surname", nullable = false)
    private String studentSurname;
    @Column(name = "student_date_of_birthday", nullable = false)
    private LocalDate dateOfBirthday;
    @Column(name = "student_age", updatable = false)
    private Integer studentAge;

    public Student() {
    }

    public Student(String studentName, String studentSurname, LocalDate dateOfBirthday) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.dateOfBirthday = dateOfBirthday;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentSurname() {
        return studentSurname;
    }

    public void setStudentSurname(String studentSurname) {
        this.studentSurname = studentSurname;
    }

    public LocalDate getDateOfBirthday() {
        return dateOfBirthday;
    }

    public void setDateOfBirthday(LocalDate dateOfBirthday) {
        this.dateOfBirthday = dateOfBirthday;
    }

    public Integer getStudentAge() {
        return Period.between(this.dateOfBirthday, LocalDate.now()).getYears();
    }

    public void setStudentAge(Integer studentAge) {
        this.studentAge = studentAge;
    }

    @Override
    public String toString() {
        return "\nStudent{" +
                "studentId=" + studentId +
                ", studentName='" + studentName + '\'' +
                ", studentSurname='" + studentSurname + '\'' +
                ", dateOfBirthday=" + dateOfBirthday +
                ", studentAge=" + studentAge +
                '}';
    }
}
