package com.example.myapi.service;

import com.example.myapi.model.OrdemDeServico;
import com.example.myapi.repository.OrdemDeServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdemDeServicoService {

    @Autowired
    private OrdemDeServicoRepository ordemDeServicoRepository;

    public OrdemDeServico saveOrdemDeServico(OrdemDeServico ordemDeServico) {
        return ordemDeServicoRepository.save(ordemDeServico);
    }

    public List<OrdemDeServico> getAllOrdensDeServico() {
        return ordemDeServicoRepository.findAll();
    }

    public OrdemDeServico updateOrdemDeServico(OrdemDeServico ordemDeServico) {
        return ordemDeServicoRepository.save(ordemDeServico);
    }
}
