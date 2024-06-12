package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class ContratoDeManutencao extends Contrato {

    private String detalhesManutencao;
    private Integer duracaoEmMeses;
}
