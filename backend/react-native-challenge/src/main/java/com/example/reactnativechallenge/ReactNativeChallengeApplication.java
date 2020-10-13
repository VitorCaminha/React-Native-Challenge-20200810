package com.example.reactnativechallenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ReactNativeChallengeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactNativeChallengeApplication.class, args);
	}

	@GetMapping("/")
	public String hello() {
		return String.format("RN Challenge 20200810 Running");
	}
}
