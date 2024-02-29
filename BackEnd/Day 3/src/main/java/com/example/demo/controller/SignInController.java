package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.SignInDTO;
import com.example.demo.service.SignInService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/signIn")
public class SignInController {
    private SignInService signInService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<SignInDTO> createSignIn(@RequestBody SignInDTO signInDto) {
        SignInDTO savedSignIn = signInService.createSignIn(signInDto);
        return new ResponseEntity<>(savedSignIn, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<SignInDTO> getSignInId(@PathVariable("id") Long signInId) {
        SignInDTO signInDto = signInService.getSignInById(signInId);
        return ResponseEntity.ok(signInDto);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<SignInDTO>> getAllSignIn() {
        List<SignInDTO> employees = signInService.getAllSignIn();
        return ResponseEntity.ok(employees);
    }
}
