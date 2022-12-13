package com.example.springplusreactpractic.configs;

import com.example.springplusreactpractic.models.Student;
import com.example.springplusreactpractic.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentsConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
        return args -> {
            Student ruslan = new Student("Ruslan", "Kerimov",
                    LocalDate.of(1993, Month.FEBRUARY, 2));

            Student tanya = new Student("Tanya", "Artemeva",
                    LocalDate.of(1987, Month.JANUARY, 22));

            Student katya = new Student("Katya", "Zinova",
                    LocalDate.of(1993, Month.MAY, 10));

            Student olga = new Student("Olga", "Yousupova",
                    LocalDate.of(1989, Month.OCTOBER, 7));

            Student viktor = new Student("Viktor", "Perestukin",
                    LocalDate.of(1966, Month.APRIL, 20));

            studentRepository.saveAll(List.of(ruslan, tanya, katya, olga, viktor));
        };
    }
}
