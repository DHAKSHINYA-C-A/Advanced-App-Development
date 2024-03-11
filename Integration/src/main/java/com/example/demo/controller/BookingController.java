package com.example.demo.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.BookingDTO;

import com.example.demo.service.BookingService;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/booking")
public class BookingController {
    private BookingService feedbackService;
    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAllBooking() {
        List<BookingDTO> profile = feedbackService.getAllBooking();
        return ResponseEntity.ok(profile);
    }
     @PostMapping
    public ResponseEntity<BookingDTO> createBooking(@RequestBody BookingDTO newProfileDto) {
        BookingDTO createdProfile = feedbackService.createBooking(newProfileDto);
        return ResponseEntity.ok(createdProfile);
    }
}
