package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class PessoaFisica extends Cliente {

    private String cpf;
    private String nomeCompleto;
    private Date dataNascimento;
}
