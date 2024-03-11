package com.example.demo.mapper;

import com.example.demo.dto.UserInfoDTO;
import com.example.demo.entity.UserInfo;

public class UserInfoMapper {

    public static UserInfoDTO mapToUserInfoDto(UserInfo userInfo) {
        UserInfoDTO userInfoDto = new UserInfoDTO();
        userInfoDto.setId(userInfo.getId());
        userInfoDto.setName(userInfo.getName());
        userInfoDto.setEmail(userInfo.getEmail());
        userInfoDto.setPassword(userInfo.getPassword());
        
        userInfoDto.setRoles(userInfo.getRoles());
        return userInfoDto;
    }

    public static UserInfo mapToUserInfo(UserInfoDTO userInfoDto) {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(userInfoDto.getId());
        userInfo.setName(userInfoDto.getName());
        userInfo.setEmail(userInfoDto.getEmail());
        userInfo.setPassword(userInfoDto.getPassword());
        
        userInfo.setRoles(userInfoDto.getRoles());
        return userInfo;
    }
}