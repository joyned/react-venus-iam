package com.venus.task.manager.domain.repository;

import com.venus.task.manager.domain.entity.VenusUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface VenusUserRepository extends JpaRepository<VenusUser, UUID> {
    Optional<VenusUser> findByEmail(String email);
}
