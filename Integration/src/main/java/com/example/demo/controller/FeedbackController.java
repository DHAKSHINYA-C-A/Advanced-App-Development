package com.example.demo.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.FeedBackDTO;
import com.example.demo.service.FeedbackService;
import lombok.AllArgsConstructor;
@AllArgsConstructor
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    private FeedbackService feedbackService;
    @GetMapping
    public ResponseEntity<List<FeedBackDTO>> getAllFeedBack() {
        List<FeedBackDTO> profile = feedbackService.getAllFeedBack();
        return ResponseEntity.ok(profile);
    }
     @PostMapping
    public ResponseEntity<FeedBackDTO> createFeedBack(@RequestBody FeedBackDTO newProfileDto) {
        FeedBackDTO createdProfile = feedbackService.createFeedback(newProfileDto);
        return ResponseEntity.ok(createdProfile);
    }
}
