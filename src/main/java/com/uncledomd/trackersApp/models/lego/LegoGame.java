package com.uncledomd.trackersApp.models.lego;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="lego_game")
@Data
public class LegoGame {

    LegoGame() {
    }

    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "game_name")
    private String gameName;

    @NotNull
    @Column(name = "image_url")
    private String imageUrl;

    @NotNull
    @Column(name = "hundred_percent_completion")
    private Boolean hundredPercentCompletion;

    @NotNull
    @Column(name = "all_achievements")
    private Boolean allAchievements;
}
