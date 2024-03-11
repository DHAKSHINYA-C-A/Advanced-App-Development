package com.example.demo.service;

import java.util.List;
import com.example.demo.dto.ServicesDTO;

public interface ServicesService {
    ServicesDTO createServices(ServicesDTO servicesDto);

    List<ServicesDTO> getAllServices();

    ServicesDTO updateServices(Long servicesId, ServicesDTO updatedServicesDto);

    void deleteServices(Long servicesId);
}
