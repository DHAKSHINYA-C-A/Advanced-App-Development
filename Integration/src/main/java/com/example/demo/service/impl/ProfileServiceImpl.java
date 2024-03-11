package com.example.demo.service.impl;
import java.util.ArrayList;
import java.util.List;


import org.springframework.stereotype.Service;

import com.example.demo.entity.Profile;

import com.example.demo.dto.ProfileDTO;

import com.example.demo.mapper.ProfileMapper;

import com.example.demo.repository.ProfileRepo;

import com.example.demo.service.ProfileService;

import com.example.demo.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService{
     private ProfileRepo profileRepository;

      @Override
    public List<ProfileDTO> getAllProfile() {
        List<Profile> employees = profileRepository.findAll();

        List<ProfileDTO> employeeDtos = new ArrayList<>();
        for (Profile employee : employees) {
            employeeDtos.add(ProfileMapper.maptoEmployeeDto(employee));
        }

        return employeeDtos;
    }

    @Override
    public ProfileDTO updateProfile(Long profileId, ProfileDTO updatedProfileDto) {
        Profile existingProfile = profileRepository.findById(profileId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id: " + profileId));

        // Update the existing Profile with the values from updatedProfileDto
        existingProfile.setName(updatedProfileDto.getName());
        existingProfile.setAge(updatedProfileDto.getAge());
        existingProfile.setGender(updatedProfileDto.getGender());
        existingProfile.setPhone(updatedProfileDto.getPhone());
        existingProfile.setBio(updatedProfileDto.getBio());
        existingProfile.setServicesrequired(updatedProfileDto.getServicesrequired());
        existingProfile.setPhoto(updatedProfileDto.getPhoto());

        Profile updatedServices = profileRepository.save(existingProfile);
        return ProfileMapper.maptoEmployeeDto(updatedServices);
    }
    @Override
    public ProfileDTO createProfile(ProfileDTO newProfileDto) {
        Profile newProfile = new Profile();
        newProfile.setName(newProfileDto.getName());
     
        newProfile.setAge(newProfileDto.getAge());
        newProfile.setGender(newProfileDto.getGender());
        newProfile.setPhone(newProfileDto.getPhone());
        newProfile.setBio(newProfileDto.getBio());
        newProfile.setServicesrequired(newProfileDto.getServicesrequired());
        newProfile.setPhoto(newProfileDto.getPhoto());
        Profile savedProfile = profileRepository.save(newProfile);
        return ProfileMapper.maptoEmployeeDto(savedProfile);
}

}
