package com.example.demo.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.GenerationType;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="Name" ,nullable=false)
    private String name;

    @Column(name="age" ,nullable=false)
    private Long age;

    @Column(name="gender" ,nullable=false)
    private String gender;

    @Column(name="phone" ,nullable=false)
    private Long phone;

    @Column(name="bio" ,nullable=false)
    private String bio;

    @Column(name="servicesrequired" ,nullable=false)
    private String servicesrequired;

    @Column(name="photo" ,nullable=false)
    private String photo;
}
