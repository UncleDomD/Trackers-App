package com.uncledomd.trackersApp.repository.darkAether;

import com.uncledomd.trackersApp.models.darkAether.Gun;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource
public interface GunRepository extends JpaRepository<Gun, Long> {

    Page<Gun> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
