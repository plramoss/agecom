package com.example.myapi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
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
}
