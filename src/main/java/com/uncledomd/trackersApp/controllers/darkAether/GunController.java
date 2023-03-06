package com.uncledomd.trackersApp.controllers.darkAether;


import com.uncledomd.trackersApp.models.darkAether.Gun;
import com.uncledomd.trackersApp.repository.darkAether.GunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:8080")
@RestController
@RequestMapping("/api/guns")
public class GunController {

    @Autowired
    private GunRepository gunRepository;

    public GunController(GunRepository gunRepository) {
        this.gunRepository = gunRepository;
    }

    @PutMapping("/{gun_id}/update")
    public ResponseEntity<Gun> updateGun(@PathVariable("gun_id") long id, @RequestBody Gun gunRequest) {
        Gun gun = gunRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("GunId " + id + " not found"));
        gun.setGoldCompleted(gunRequest.getGoldCompleted());
        gun.setMaxLevel(gunRequest.getMaxLevel());

        return new ResponseEntity<>(gunRepository.save(gun), HttpStatus.OK);
    }
}
