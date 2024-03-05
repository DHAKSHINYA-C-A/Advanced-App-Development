package com.example.demo.mapper;
import com.example.demo.dto.ServicesDTO;
import com.example.demo.entity.Services;

public class ServicesMapper {
    public static ServicesDTO maptoEmployeeDto(Services sign) {
        return new ServicesDTO(
                sign.getId(),
                sign.getSname(),
                sign.getDetails(),
                sign.getCost(),
                sign.getImage());
    }

    public static Services maptoEmployee(ServicesDTO signTo) {
        return new Services(
            signTo.getId(),
            signTo.getSname(),
            signTo.getDetails(),
            signTo.getCost(),
            signTo.getImage());
    }
}
