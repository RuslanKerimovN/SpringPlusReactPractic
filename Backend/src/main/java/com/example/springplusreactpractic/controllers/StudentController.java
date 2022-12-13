package com.example.springplusreactpractic.controllers;

import com.example.springplusreactpractic.models.Student;
import com.example.springplusreactpractic.services.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/")
    @Operation(
            tags = "Работа со студентами",
            summary = "Запрос на список студентов",
            operationId = "getStudents",
            description = "Get Students Operation",
            responses = {@ApiResponse(
                    responseCode = "200",
                    description = "Студенты получены",
                    content = @Content(
                            array = @ArraySchema(
                            schema = @Schema(implementation = Student.class)),
                            mediaType = MediaType.APPLICATION_JSON_VALUE))
            }
    )
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/add-student")
    @Operation(
            tags = "Работа со студентами",
            summary = "Запрос на добавление студента",
            operationId = "addStudent",
            description = "Add Student Operation",
            responses = {@ApiResponse(
                    responseCode = "200",
                    content = @Content(
                            schema = @Schema(
                                    implementation = Student.class),
                                    mediaType = MediaType.APPLICATION_JSON_VALUE),
                    description = "Студент добавлен")},
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Поля студента")
    )
    public void addStudent(@RequestBody Student student) {
        studentService.addStudent(student);
    }

    @DeleteMapping(path = "/delete/{studentId}")
    @Operation(
            tags = "Работа со студентами",
            summary = "Запрос на удаление студента",
            operationId = "deleteStudent",
            description = "Delete Student Operation",
            parameters = {@Parameter(
                    name = "studentId",
                    description = "id студета",
                    example = "1")},
            responses = {@ApiResponse(
                    responseCode = "200",
                    description = "Студент удален")}
    )
    public void deleteStudent(@PathVariable("studentId") Long studentId) {
        studentService.deleteStudent(studentId);
    }

    @GetMapping("/students/{studentId}")
    @Operation(
            tags = "Работа со студентами",
            summary = "Запрос на одного студента по id",
            operationId = "getStudentById",
            description = "Get One Student Operation",
            parameters = {@Parameter(
                    name = "studentId",
                    description = "id студета",
                    example = "1")},
            responses = {@ApiResponse(
                    responseCode = "200",
                    description = "Студент найден",
                    content = @Content(
                            schema = @Schema(
                                    implementation = Student.class),
                            mediaType = MediaType.APPLICATION_JSON_VALUE))}
    )
    public Student getStudentById(@PathVariable("studentId") Long studentId) {
        return studentService.getStudentById(studentId);
    }

    @PutMapping(path = "/update/{studentId}")
    @Operation(
            tags = "Работа со студентами",
            operationId = "updateStudent",
            summary = "Запрос на изменение данных студента",
            description = "Update Students Operation",
            parameters = {@Parameter(
                    name = "studentId",
                    description = "id студета",
                    example = "1")},
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Поля студента"),
            responses = {@ApiResponse(
                    responseCode = "200",
                    content = @Content(
                            schema = @Schema(
                                    implementation = Student.class),
                            mediaType = MediaType.APPLICATION_JSON_VALUE),
                    description = "Студент обновлен")}
    )
    public void updateStudent(@PathVariable("studentId") Long studentId,
                              @RequestBody Student student) {
        studentService.updateStudent(studentId, student);
    }
}
