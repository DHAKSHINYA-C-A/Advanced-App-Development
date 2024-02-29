package com.example.demo.service;
import java.util.List;
import com.example.demo.dto.SignInDTO;
public interface SignInService {
    SignInDTO createSignIn(SignInDTO employeeDto);

    SignInDTO getSignInById(Long employeeId);

    List<SignInDTO> getAllSignIn();
}
