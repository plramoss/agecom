package com.example.myapi.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cep;
    private String logradouro;
    private String numero;
    private String complemento;
    private String bairro;
    private String uf;
    private String localidade;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
