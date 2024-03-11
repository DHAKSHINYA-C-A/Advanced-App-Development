package com.example.demo.service.impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Services;
import com.example.demo.dto.ServicesDTO;
import com.example.demo.mapper.ServicesMapper;
import com.example.demo.repository.ServicesRepo;
import com.example.demo.service.ServicesService;
import com.example.demo.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServicesServiceImpl implements ServicesService{
    private ServicesRepo servicesRepository;

    @Override
    public ServicesDTO createServices(ServicesDTO servicesdto) {

        Services services = ServicesMapper.maptoEmployee(servicesdto);
        Services savedServices = servicesRepository.save(services);
        return ServicesMapper.maptoEmployeeDto(savedServices);
    }
     @Override
    public List<ServicesDTO> getAllServices() {
        List<Services> employees = servicesRepository.findAll();

        List<ServicesDTO> employeeDtos = new ArrayList<>();
        for (Services employee : employees) {
            employeeDtos.add(ServicesMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }
    @Override
    public ServicesDTO updateServices(Long servicesId, ServicesDTO updatedServicesDto) {
        Services existingServices = servicesRepository.findById(servicesId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + servicesId));

       
        existingServices.setSname(updatedServicesDto.getSname());
        existingServices.setDetails(updatedServicesDto.getDetails());
        existingServices.setCost(updatedServicesDto.getCost());
        existingServices.setImage(updatedServicesDto.getImage());

        Services updatedServices = servicesRepository.save(existingServices);
        return ServicesMapper.maptoEmployeeDto(updatedServices);
    }

    @Override
    public void deleteServices(Long servicesId) {
        Services existingServices = servicesRepository.findById(servicesId)
                .orElseThrow(() -> new ResourceNotFoundException("Services not found with id: " + servicesId));

        servicesRepository.delete(existingServices);
    }
}
