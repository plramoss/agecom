package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class ContratoDeAluguel extends Contrato {

    private Double rentalRate;
    private String periodoAluguel;
}
