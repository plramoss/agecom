package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class PessoaFisica extends Cliente {

    private String cpf;
    private String nomeCompleto;
    private Date dataNascimento;
}
