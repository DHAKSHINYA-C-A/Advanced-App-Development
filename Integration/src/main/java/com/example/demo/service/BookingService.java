package com.example.demo.service;
import java.util.List;
import com.example.demo.dto.BookingDTO;


public interface BookingService {
     BookingDTO createBooking(BookingDTO newFeedBackDto);
     List<BookingDTO> getAllBooking();
  
}
