package com.ipldashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IplDashboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(IplDashboardApplication.class, args);
        System.out.println("Spring Boot Application for IPL Dashboard");
        //System.exit(SpringApplication.exit(SpringApplication.run(IplDashboardApplication.class, args)));
    }

}