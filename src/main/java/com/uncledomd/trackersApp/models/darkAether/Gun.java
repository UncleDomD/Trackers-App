package com.uncledomd.trackersApp.models.darkAether;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;

@Entity
@Table(name="gun")
@Data
public class Gun {

    Gun() {
    }

    @NotNull
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    @RestResource(path="gunCategory", rel="category")
    private GunCategory category;

    @NotNull
    @Column(name = "gun_name")
    private String gunName;

    @NotNull
    @Column(name = "gold_completed")
    private Boolean goldCompleted;

    @NotNull
    @Column(name = "max_level")
    private Boolean maxLevel;

    @NotNull
    @Column(name = "image_url")
    private String imageUrl;

}