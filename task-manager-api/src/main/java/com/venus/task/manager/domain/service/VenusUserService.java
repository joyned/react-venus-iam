package com.venus.task.manager.domain.service;

import com.venus.task.manager.domain.entity.VenusUser;
import com.venus.task.manager.domain.repository.VenusUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VenusUserService {

    private final VenusUserRepository venusUserRepository;

    public VenusUser findByEmail(String email) {
        Optional<VenusUser> venusUser = venusUserRepository.findByEmail(email);
        return venusUser.isPresent() ? venusUser.get() : null;
    }
}
