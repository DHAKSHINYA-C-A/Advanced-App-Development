package com.example.demo.service;
import java.util.List;
import com.example.demo.dto.FeedBackDTO;


public interface FeedbackService {
     FeedBackDTO createFeedback(FeedBackDTO newFeedBackDto);
     List<FeedBackDTO> getAllFeedBack();
  
}
