package org.contacts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration;

@SpringBootApplication(exclude = {R2dbcAutoConfiguration.class})
public class Main { 

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        System.out.printf("Spring Boot application is starting up!");
    }
}
