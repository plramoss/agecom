package com.example.myapi.model;

import javax.persistence.Entity;

@Entity
public class ContratoDeAluguel extends Contrato {

    private Double rentalRate;
    private String periodoAluguel;

    // Getters e Setters

    public Double getRentalRate() {
        return rentalRate;
    }

    public void setRentalRate(Double rentalRate) {
        this.rentalRate = rentalRate;
    }

    public String getPeriodoAluguel() {
        return periodoAluguel;
    }

    public void setPeriodoAluguel(String periodoAluguel) {
        this.periodoAluguel = periodoAluguel;
    }
}
