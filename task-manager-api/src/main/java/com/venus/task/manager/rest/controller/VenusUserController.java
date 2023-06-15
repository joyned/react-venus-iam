package com.venus.task.manager.rest.controller;

import com.venus.task.manager.domain.entity.VenusUser;
import com.venus.task.manager.domain.service.VenusUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/user")
public class VenusUserController {

    private final VenusUserService venusUserService;

    @GetMapping("/{email}")
    public ResponseEntity<VenusUser> findByEmail(@PathVariable String email) {
        return ResponseEntity.ok(venusUserService.findByEmail(email));
    }
}
