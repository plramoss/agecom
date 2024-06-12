package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class PessoaJuridica extends Cliente {

    private String cnpj;
    private String razaoSocial;
    private String nomeFantasia;
    private Date dataFundacao;
}
