package com.venus.task.manager.rest.controller;

import com.venus.task.manager.domain.entity.Task;
import com.venus.task.manager.domain.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/task")
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<List<Task>> findAll() {
        return ResponseEntity.ok(taskService.findAll());
    }
}
