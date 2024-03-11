package com.example.demo.service;
import java.util.List;
import com.example.demo.dto.ProfileDTO;

public interface ProfileService {
    List<ProfileDTO> getAllProfile();
    ProfileDTO createProfile(ProfileDTO newProfileDto);
    ProfileDTO updateProfile(Long profileId, ProfileDTO updatedPofileDto);
}
