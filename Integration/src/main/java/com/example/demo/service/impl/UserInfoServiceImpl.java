package com.example.demo.service.impl;

import com.example.demo.dto.UserInfoDTO;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.UserInfoMapper;
import com.example.demo.entity.UserInfo;
import com.example.demo.repository.UserInfoRepository;
import com.example.demo.service.UserInfoService;
import lombok.AllArgsConstructor;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserInfoServiceImpl implements UserInfoService {

    private final UserInfoRepository userInfoRepository;

    @Override
    public UserInfoDTO getUserInfoById(Integer userId) {
        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
        return UserInfoMapper.mapToUserInfoDto(userInfo);
    }

    @Override
    public UserInfoDTO updateUserInfo(Integer userId, UserInfoDTO userInfoDto) {
        UserInfo existingUserInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
    
        if(userInfoDto.getName() != null) {
            existingUserInfo.setName(userInfoDto.getName());
        }
        if(userInfoDto.getEmail() != null) {
            existingUserInfo.setEmail(userInfoDto.getEmail());
        }
      
        UserInfo savedUserInfo = userInfoRepository.save(existingUserInfo);
        return UserInfoMapper.mapToUserInfoDto(savedUserInfo);
    }
    
    @Override
    public List<String> getUserRolesByName(String username) {
        Optional<UserInfo> userInfoOptional = userInfoRepository.findByName(username);
        if (userInfoOptional.isPresent()) {
            return Collections.singletonList(userInfoOptional.get().getRoles());
        } else {
            throw new ResourceNotFoundException("User information not found with username: " + username);
        }
    }

    @Override
    public Integer getUserIdByName(String username) {
        Optional<UserInfo> userInfoOptional = userInfoRepository.findByName(username);
        if (userInfoOptional.isPresent()) {
            return userInfoOptional.get().getId();
        } else {
            throw new ResourceNotFoundException("User information not found with username: " + username);
        }
    }

    @Override
    public void deleteUserInfo(Integer userId) {
        if (!userInfoRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User information not found with id: " + userId);
        }
        userInfoRepository.deleteById(userId);
    }
}
