package com.example.demo.service.impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Booking;

import com.example.demo.dto.BookingDTO;

import com.example.demo.mapper.BookingMapper;

import com.example.demo.repository.BookingRepo;

import com.example.demo.service.BookingService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService{
     private BookingRepo feedbackRepository;
      @Override
    public List<BookingDTO> getAllBooking() {
        List<Booking> employees = feedbackRepository.findAll();

        List<BookingDTO> employeeDtos = new ArrayList<>();
        for (Booking employee : employees) {
            employeeDtos.add(BookingMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
    
    @Override
    public BookingDTO createBooking(BookingDTO servicesdto) {

        Booking services = BookingMapper.maptoEmployee(servicesdto);
        Booking savedServices = feedbackRepository.save(services);
        return BookingMapper.maptoEmployeeDto(savedServices);
    }

}
