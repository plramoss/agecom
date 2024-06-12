package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Usuario {

    private String registro;
    private String cargo;
    private Date dataAdmissao;
}
