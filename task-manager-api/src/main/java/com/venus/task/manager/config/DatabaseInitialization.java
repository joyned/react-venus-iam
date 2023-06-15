package com.venus.task.manager.config;

import com.venus.task.manager.domain.entity.VenusUser;
import com.venus.task.manager.domain.entity.Task;
import com.venus.task.manager.domain.repository.VenusUserRepository;
import com.venus.task.manager.domain.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class DatabaseInitialization implements CommandLineRunner {

    private final TaskRepository taskRepository;
    private final VenusUserRepository venusUserRepository;

    @Override
    public void run(String... args) throws Exception {
        startTask(startUser());
    }

    private VenusUser startUser() {
        VenusUser venusUser = new VenusUser();

        venusUser.setName("Bruno da Silveira Bizeray Godoy");
        venusUser.setEmail("brunodsbg@gmail.com");
        venusUser = venusUserRepository.save(venusUser);
        return venusUser;
    }

    private void startTask(VenusUser owner) {
        Task task = new Task();

        task.setId(UUID.randomUUID());
        task.setName("Configurar Bitbucket");
        task.setDescription("A task is a specific action or set of actions that needs to be completed within a defined timeframe.");
        task.setStatus("Pending");
        task.setCreatedAt(new Date());
        task.setDueDate(new Date());
        task.setOwner(owner);

        taskRepository.save(task);

        task.setId(UUID.randomUUID());
        task.setName("Configurar Pipelines");
        taskRepository.save(task);

        task.setId(UUID.randomUUID());
        task.setName("Deploy");
        taskRepository.save(task);

        task.setId(UUID.randomUUID());
        task.setName("Configurar aplicação");
        taskRepository.save(task);
    }
}
