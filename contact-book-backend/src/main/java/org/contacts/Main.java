package org.contacts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration;

@SpringBootApplication(exclude = {R2dbcAutoConfiguration.class}) // Exclude R2DBC
// 1. It's a Spring Boot application.
// 2. It enables auto-configuration.
// 3. It enables component scanning (to find your @Repository, @Service, @RestController).
public class Main { // You can rename this class to something like ContactBookBackendApplication

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        System.out.printf("Spring Boot application is starting up!");
    }
}
