package com.example.springplusreactpractic;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(title = "Students API", version = "1.0"),
        servers = {@Server(url = "http://localhost:8080/")},
        tags = {@Tag(name = "Работа со студентами",
                description = "Выполнение различных запросов")}
)
public class SpringPlusReactPracticApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringPlusReactPracticApplication.class, args);
    }

}
