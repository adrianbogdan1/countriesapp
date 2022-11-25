package com.adrian.countriesapp.country;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Country {

    @Id
    private int id;
    private String name;
    private double percentage;
    private int range;
    private String imageUrl;

}
