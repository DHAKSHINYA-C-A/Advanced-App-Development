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
@Table(name="booking")
public class Booking
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name" ,nullable=false)
    private String name;

    @Column(name="startDate" ,nullable=false)
    private String startDate;

    @Column(name="endDate" ,nullable=false)
    private String endDate;

    @Column(name="workingHours" ,nullable=false)
    private int workingHours;

    @Column(name="selectedService" ,nullable=false)
    private String selectedService;

    @Column(name="cost" ,nullable=false)
    private String cost;
}
