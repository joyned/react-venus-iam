package com.venus.task.manager.domain.service;

import com.venus.task.manager.domain.entity.Task;
import com.venus.task.manager.domain.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public Optional<Task> findById(UUID uuid) {
        return taskRepository.findById(uuid);
    }
}
