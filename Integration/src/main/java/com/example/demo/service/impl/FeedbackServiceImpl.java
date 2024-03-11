package com.example.demo.service.impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Feedback;
import com.example.demo.dto.FeedBackDTO;
import com.example.demo.mapper.FeedBackMapper;
import com.example.demo.repository.FeedbackRepo;
import com.example.demo.service.FeedbackService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{
     private FeedbackRepo feedbackRepository;
      @Override
    public List<FeedBackDTO> getAllFeedBack() {
        List<Feedback> employees = feedbackRepository.findAll();

        List<FeedBackDTO> employeeDtos = new ArrayList<>();
        for (Feedback employee : employees) {
            employeeDtos.add(FeedBackMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
    
    @Override
    public FeedBackDTO createFeedback(FeedBackDTO servicesdto) {

        Feedback services = FeedBackMapper.maptoEmployee(servicesdto);
        Feedback savedServices = feedbackRepository.save(services);
        return FeedBackMapper.maptoEmployeeDto(savedServices);
    }

}
