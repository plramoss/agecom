package com.example.myapi.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_contrato", discriminatorType = DiscriminatorType.STRING)
public abstract class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @Enumerated(EnumType.STRING)
    private TipoContrato tipo;

    @OneToMany(mappedBy = "contrato", cascade = CascadeType.ALL)
    private List<OrdemDeServico> ordensDeServico;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public TipoContrato getTipo() {
        return tipo;
    }

    public void setTipo(TipoContrato tipo) {
        this.tipo = tipo;
    }

    public List<OrdemDeServico> getOrdensDeServico() {
        return ordensDeServico;
    }

    public void setOrdensDeServico(List<OrdemDeServico> ordensDeServico) {
        this.ordensDeServico = ordensDeServico;
    }
}
