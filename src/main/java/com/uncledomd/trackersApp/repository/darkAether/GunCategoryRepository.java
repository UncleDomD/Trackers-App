package com.uncledomd.trackersApp.repository.darkAether;

import com.uncledomd.trackersApp.models.darkAether.GunCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "gunCategory", path = "gun-category")
public interface GunCategoryRepository extends JpaRepository<GunCategory, Long> {

}
