package com.example.myapi.model;

import javax.persistence.Entity;

@Entity
public class ContratoDeManutencao extends Contrato {

    private String detalhesManutencao;
    private Integer duracaoEmMeses;

    // Getters e Setters

    public String getDetalhesManutencao() {
        return detalhesManutencao;
    }

    public void setDetalhesManutencao(String detalhesManutencao) {
        this.detalhesManutencao = detalhesManutencao;
    }

    public Integer getDuracaoEmMeses() {
        return duracaoEmMeses;
    }

    public void setDuracaoEmMeses(Integer duracaoEmMeses) {
        this.duracaoEmMeses = duracaoEmMeses;
    }
}
