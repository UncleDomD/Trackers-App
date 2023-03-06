package com.uncledomd.trackersApp.models.darkAether;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="gun_category")
@Getter
@Setter
public class GunCategory {

    @NotNull
    @Id
    @Column(name="id")
    private Long id;

    @NotNull
    @Column(name="category_name")
    private String categoryName;

    @NotNull
    @Column(name="diamond_completed")
    private Boolean diamondCompleted;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Gun> guns;
}
