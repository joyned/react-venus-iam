package com.venus.task.manager.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Entity
@Table
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String name;

    @Column(columnDefinition = "VARCHAR(255)")
    private String description;

    @Column
    @Temporal(TemporalType.DATE)
    private Date createdAt;

    @Column
    @Temporal(TemporalType.DATE)
    private Date dueDate;

    @Column
    private String status;

    @ManyToOne(targetEntity = VenusUser.class)
    private VenusUser owner;

}
