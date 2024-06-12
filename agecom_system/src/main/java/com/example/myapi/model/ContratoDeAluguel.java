package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class ContratoDeAluguel extends Contrato {

    private Double rentalRate;
    private String periodoAluguel;
}
