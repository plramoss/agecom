package com.example.myapi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class OrdemDeServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private Date dataCriacao;
    private String status;

    @ManyToOne
    @JoinColumn(name = "contrato_id")
    private Contrato contrato;
}
