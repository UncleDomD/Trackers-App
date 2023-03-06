package com.uncledomd.trackersApp.repository.lego;

import com.uncledomd.trackersApp.models.lego.LegoGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface LegoGameRepository extends JpaRepository<LegoGame, Long> {
}
