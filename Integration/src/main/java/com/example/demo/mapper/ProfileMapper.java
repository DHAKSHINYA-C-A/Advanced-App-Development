package com.example.demo.mapper;
import com.example.demo.dto.ProfileDTO;

import com.example.demo.entity.Profile;

public class ProfileMapper {
    public static ProfileDTO maptoEmployeeDto(Profile sign) {
        return new ProfileDTO(
                sign.getId(),
                sign.getName(),
                sign.getAge(),
                sign.getGender(),
                sign.getPhone(),
                sign.getBio(),
                sign.getServicesrequired(),
                sign.getPhoto()
                );
    }

    public static Profile maptoEmployee(ProfileDTO signTo) {
        return new Profile(
                signTo.getId(),
                signTo.getName(),
                signTo.getAge(),
                signTo.getGender(),
                signTo.getPhone(),
                signTo.getBio(),
                signTo.getServicesrequired(),
                signTo.getPhoto()
                );
    }
}
