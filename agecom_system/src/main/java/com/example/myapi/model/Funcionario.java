package com.example.myapi.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Funcionario extends Usuario {

    private String registro;
    private String cargo;
    private Date dataAdmissao;
}
