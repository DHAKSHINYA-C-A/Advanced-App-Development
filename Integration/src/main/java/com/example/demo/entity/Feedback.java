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
@Table(name="feedback")
public class Feedback 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name" ,nullable=false)
    private String name;

    @Column(name="email" ,nullable=false)
    private String email;

    @Column(name="number" ,nullable=false)
    private Long number;

    @Column(name="address" ,nullable=false)
    private String address;

    @Column(name="rating" ,nullable=false)
    private String rating;

    @Column(name="feed" ,nullable=false)
    private String feed;
}
