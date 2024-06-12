package com.example.myapi.controller;

import com.example.myapi.model.OrdemDeServico;
import com.example.myapi.service.OrdemDeServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ordensdeservico")
public class OrdemDeServicoController {

    @Autowired
    private OrdemDeServicoService ordemDeServicoService;

    @PostMapping
    public OrdemDeServico createOrdemDeServico(@RequestBody OrdemDeServico ordemDeServico) {
        return ordemDeServicoService.saveOrdemDeServico(ordemDeServico);
    }

    @PutMapping
    public OrdemDeServico updateOrdemDeServico(@RequestBody OrdemDeServico ordemDeServico) {
        return ordemDeServicoService.updateOrdemDeServico(ordemDeServico);
    }

    @GetMapping
    public List<OrdemDeServico> getAllOrdensDeServico() {
        return ordemDeServicoService.getAllOrdensDeServico();
    }
}
