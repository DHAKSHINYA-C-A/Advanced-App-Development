package com.example.demo.controller;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.UserInfoDTO;
// import com.example.demo.exception.ResourceNotFoundException;
// import com.example.demo.entity.UserInfo;
import com.example.demo.service.UserInfoService;
import java.util.*;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/userinfo")
public class UserInfoController {

    private UserInfoService userInfoService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDTO> getUserInfo(@PathVariable("userId") Integer userId) {
        UserInfoDTO userInfoDto = userInfoService.getUserInfoById(userId);
        return ResponseEntity.ok(userInfoDto);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{userId}")
    public ResponseEntity<UserInfoDTO> updateUserInfo(@PathVariable("userId") Integer userId, @RequestBody UserInfoDTO userInfoDto) {
        UserInfoDTO updatedUserInfo = userInfoService.updateUserInfo(userId, userInfoDto);
        return ResponseEntity.ok(updatedUserInfo);
    }
    @GetMapping("/roles/{username}")
    public ResponseEntity<List<String>> getUserRolesByName(@PathVariable("username") String username) {
        List<String> roles = userInfoService.getUserRolesByName(username);
        return ResponseEntity.ok(roles);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable("userId") Integer userId) {
        userInfoService.deleteUserInfo(userId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/id/{username}")
    public ResponseEntity<Integer> getUserIdByName(@PathVariable("username") String username) {
        Integer userId = userInfoService.getUserIdByName(username);
        return ResponseEntity.ok(userId);
    }
}
