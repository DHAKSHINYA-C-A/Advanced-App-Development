package com.example.demo.dto;
// import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {
    private Long id;
    private String name;
    private String startDate;
    private String endDate;
    private int workingHours;
    private String selectedService;
    private String cost;
}
