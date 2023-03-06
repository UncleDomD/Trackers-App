package com.uncledomd.trackersApp.controllers.darkAether;

import com.uncledomd.trackersApp.models.darkAether.GunCategory;
import com.uncledomd.trackersApp.repository.darkAether.GunCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:8080")
@RestController
@RequestMapping("/api/gun-category")
public class GunCategoryController {

    @Autowired
    private GunCategoryRepository gunCategoryRepository;

    public GunCategoryController(GunCategoryRepository gunCategoryRepository) {
        this.gunCategoryRepository = gunCategoryRepository;
    }

    @PutMapping("/{gunCategory_id}/update")
    public ResponseEntity<GunCategory> updateGunCategory(@PathVariable("gunCategory_id") long id, @RequestBody GunCategory gunCategoryRequest) {
        GunCategory gunCategory = gunCategoryRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("GunCategoryId " + id + " not found."));
        gunCategory.setDiamondCompleted(gunCategoryRequest.getDiamondCompleted());

        return new ResponseEntity<>(gunCategoryRepository.save(gunCategory), HttpStatus.OK);
    }

}
