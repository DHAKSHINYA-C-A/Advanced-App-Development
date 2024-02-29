package com.example.demo.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ProfileDTO;
import com.example.demo.service.ProfileService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
     private ProfileService profileService;
    
       @GetMapping
    public ResponseEntity<List<ProfileDTO>> getAllProfile() {
        List<ProfileDTO> profile = profileService.getAllProfile();
        return ResponseEntity.ok(profile);
    }
     @PutMapping("{id}")
    public ResponseEntity<ProfileDTO> updateProfile(@PathVariable("id") Long ProfileId,
                                                     @RequestBody ProfileDTO updatedProfileDto) {
        ProfileDTO updatedProfile = profileService.updateProfile(ProfileId, updatedProfileDto);
        return ResponseEntity.ok(updatedProfile);
    }

}
