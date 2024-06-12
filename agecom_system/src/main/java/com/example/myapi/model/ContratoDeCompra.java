package com.example.myapi.model;

import javax.persistence.Entity;

@Entity
public class ContratoDeCompra extends Contrato {

    private Double compraPreco;
    private String termosCompra;

    // Getters e Setters

    public Double getCompraPreco() {
        return compraPreco;
    }

    public void setCompraPreco(Double compraPreco) {
        this.compraPreco = compraPreco;
    }

    public String getTermosCompra() {
        return termosCompra;
    }

    public void setTermosCompra(String termosCompra) {
        this.termosCompra = termosCompra;
    }
}
