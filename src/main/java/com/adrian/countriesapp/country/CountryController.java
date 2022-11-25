package com.adrian.countriesapp.country;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/country")
@AllArgsConstructor
public class CountryController {

    private final CountryService countryService;

//    @GetMapping
//    public List<Country> getAllCountries(){
//        return countryService.getAllCountries();
//    }

    @GetMapping
    public  Country getGeneratedCountry(){

        return countryService.getGeneratedCountry();
    }
}
