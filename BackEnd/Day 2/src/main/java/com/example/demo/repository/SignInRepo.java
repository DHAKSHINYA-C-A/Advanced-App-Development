package com.example.demo.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.SignIn;
public interface SignInRepo  extends JpaRepository<SignIn, Long>{
     Optional<SignIn> findByName(String name);
}
