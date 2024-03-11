package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ServicesDTO;
import com.example.demo.service.ServicesService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@CrossOrigin(origins="*")
@RestController

@RequestMapping("/api/services")
public class ServicesController {
    private ServicesService servicesService;

    // Create Services REST API
    @PostMapping
    public ResponseEntity<ServicesDTO> createServices(@RequestBody ServicesDTO servicesDto) {
        ServicesDTO savedServices = servicesService.createServices(servicesDto);
        return new ResponseEntity<>(savedServices, HttpStatus.CREATED);
    }

    // Get Services by ID REST API
   

    // Get All Services REST API
    @GetMapping
    public ResponseEntity<List<ServicesDTO>> getAllServices() {
        List<ServicesDTO> services = servicesService.getAllServices();
        return ResponseEntity.ok(services);
    }

    // Update Services REST API
    @PutMapping("{id}")
    public ResponseEntity<ServicesDTO> updateServices(@PathVariable("id") Long servicesId,
                                                     @RequestBody ServicesDTO updatedServicesDto) {
        ServicesDTO updatedServices = servicesService.updateServices(servicesId, updatedServicesDto);
        return ResponseEntity.ok(updatedServices);
    }

    // Delete Services REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteServices(@PathVariable("id") Long servicesId) {
        servicesService.deleteServices(servicesId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
