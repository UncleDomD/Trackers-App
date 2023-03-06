package com.uncledomd.trackersApp.controllers.lego;

import com.uncledomd.trackersApp.models.lego.LegoGame;
import com.uncledomd.trackersApp.repository.lego.LegoGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:8080")
@RestController
@RequestMapping("/api/legoGames")
public class LegoGameController {

    @Autowired
    private LegoGameRepository legoGameRepository;

    public LegoGameController(LegoGameRepository legoGameRepository) {
        this.legoGameRepository = legoGameRepository;
    }

    @PutMapping("/{game_id}/update")
    public ResponseEntity<LegoGame> updateGame(@PathVariable("game_id") long id, @RequestBody LegoGame gameRequest) {
        LegoGame legoGame = legoGameRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Game Id" + id + " not found"));
        legoGame.setHundredPercentCompletion(gameRequest.getHundredPercentCompletion());
        legoGame.setAllAchievements(gameRequest.getAllAchievements());

        return new ResponseEntity<>(legoGameRepository.save(legoGame), HttpStatus.OK);
    }
}
