package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class ContratoDeManutencao extends Contrato {

    private String detalhesManutencao;
    private Integer duracaoEmMeses;
}
