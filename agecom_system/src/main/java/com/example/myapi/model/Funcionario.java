package com.example.myapi.model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Funcionario extends Usuario {

    private String registro;
    private String cargo;
    private Date dataAdmissao;

    // Getters and Setters
    public String getRegistro() {
        return registro;
    }

    public void setRegistro(String registro) {
        this.registro = registro;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }
}
