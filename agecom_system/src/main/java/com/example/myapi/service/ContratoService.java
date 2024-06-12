package com.example.myapi.service;

import com.example.myapi.model.Contrato;
import com.example.myapi.repository.ContratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContratoService {

    @Autowired
    private ContratoRepository contratoRepository;

    public Contrato saveContrato(Contrato contrato) {
        return contratoRepository.save(contrato);
    }

    public List<Contrato> getAllContratos() {
        return contratoRepository.findAll();
    }

    public Contrato updateContrato(Contrato contrato) {
        return contratoRepository.save(contrato);
    }
}
