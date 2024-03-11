package com.example.demo.mapper;
import com.example.demo.dto.BookingDTO;

import com.example.demo.entity.Booking;


public class BookingMapper {
             public static BookingDTO maptoEmployeeDto(Booking sign) {
        return new BookingDTO(
                sign.getId(),
                sign.getName(),
                sign.getStartDate(),
                sign.getEndDate(),
                sign.getWorkingHours(),
                sign.getSelectedService(),
               
                sign.getCost()
                );
    }

    public static Booking maptoEmployee(BookingDTO signTo) {
        return new Booking(
            signTo.getId(),
            signTo.getName(),
            signTo.getStartDate(),
            signTo.getEndDate(),
            signTo.getWorkingHours(),
            signTo.getSelectedService(),
           
            signTo.getCost()
            );
}
}
