package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserInfoDTO;

public interface UserInfoService {

    UserInfoDTO getUserInfoById(Integer userId);

    UserInfoDTO updateUserInfo(Integer userId, UserInfoDTO userInfoDto);

    void deleteUserInfo(Integer userId);

    List<String> getUserRolesByName(String username);

    Integer getUserIdByName(String username);

}
