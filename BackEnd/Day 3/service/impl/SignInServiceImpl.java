package com.example.demo.service.impl;
import java.util.ArrayList;
import java.util.List;
// import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.entity.SignIn;
import com.example.demo.dto.SignInDTO;
import com.example.demo.mapper.SignInMapper;
import com.example.demo.repository.SignInRepo;
import com.example.demo.service.SignInService;
import com.example.demo.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SignInServiceImpl implements SignInService{
    private SignInRepo signInRepository;

    @Override
    public SignInDTO createSignIn(SignInDTO signIndto) {

        SignIn signIn = SignInMapper.maptoEmployee(signIndto);
        SignIn savedSignIn = signInRepository.save(signIn);
        return SignInMapper.maptoEmployeeDto(savedSignIn);
    }

    @Override
    public SignInDTO getSignInById(Long signInId) {
        SignIn signIn = signInRepository.findById(signInId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + signInId));

        return SignInMapper.maptoEmployeeDto(signIn);
    }

    @Override
    public List<SignInDTO> getAllSignIn() {
        List<SignIn> employees = signInRepository.findAll();

        List<SignInDTO> employeeDtos = new ArrayList<>();
        for (SignIn employee : employees) {
            employeeDtos.add(SignInMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
}
