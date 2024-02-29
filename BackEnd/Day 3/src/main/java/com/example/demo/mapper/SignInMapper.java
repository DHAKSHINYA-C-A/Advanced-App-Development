package com.example.demo.mapper;
import com.example.demo.dto.SignInDTO;
import com.example.demo.entity.SignIn;
public class SignInMapper {
    public static SignInDTO maptoEmployeeDto(SignIn sign) {
        return new SignInDTO(
                sign.getId(),
                sign.getName(),
                sign.getEmail(),
                sign.getPassword(),
                sign.getRoles());
    }

    public static SignIn maptoEmployee(SignInDTO signTo) {
        return new SignIn(
            signTo.getId(),
            signTo.getName(),
            signTo.getEmail(),
            signTo.getPassword(),
            signTo.getRoles());
    }
}
