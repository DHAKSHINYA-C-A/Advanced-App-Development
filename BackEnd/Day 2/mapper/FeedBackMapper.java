package com.example.demo.mapper;
import com.example.demo.dto.FeedBackDTO;

import com.example.demo.entity.Feedback;

public class FeedBackMapper {
             public static FeedBackDTO maptoEmployeeDto(Feedback sign) {
        return new FeedBackDTO(
                sign.getId(),
                sign.getName(),
                sign.getEmail(),
                sign.getNumber(),
                sign.getAddress(),
                sign.getRating(),
               
                sign.getFeed()
                );
    }

    public static Feedback maptoEmployee(FeedBackDTO signTo) {
        return new Feedback(
            signTo.getId(),
            signTo.getName(),
            signTo.getEmail(),
            signTo.getNumber(),
            signTo.getAddress(),
            signTo.getRating(),
           
            signTo.getFeed()
            );
}
}