package com.adrian.countriesapp.country;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@AllArgsConstructor
public class CountryService {

    private final CountryRepository countryRepository;

    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }

    public Country getGeneratedCountry(){

        Random random = new Random();
        int generatedValue = random.nextInt(100_000_000);

        List<Country> countries = getAllCountries();
        Country generatedCountry = countries.stream()
                                                .filter(country -> country.getRange() >= generatedValue)
                                                .findFirst()
                                                .orElse(null);

        return  generatedCountry;
    }
}
