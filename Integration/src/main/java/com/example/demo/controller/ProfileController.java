package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ProfileDTO;
import com.example.demo.service.ProfileService;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    private ProfileService profileService;

    @GetMapping
    public ResponseEntity<List<ProfileDTO>> getAllProfile() {
        List<ProfileDTO> profiles = profileService.getAllProfile();
        return ResponseEntity.ok(profiles);
    }
 @PreAuthorize("hasAuthority('USER')")
    @PutMapping("{id}")
    public ResponseEntity<ProfileDTO> updateProfile(@PathVariable("id") Long profileId,
                                                    @RequestBody ProfileDTO updatedProfileDto) {
        ProfileDTO updatedProfile = profileService.updateProfile(profileId, updatedProfileDto);
        return ResponseEntity.ok(updatedProfile);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<ProfileDTO> createProfile(@RequestBody ProfileDTO newProfileDto) {
        ProfileDTO createdProfile = profileService.createProfile(newProfileDto);
        return ResponseEntity.ok(createdProfile);
    }
}
