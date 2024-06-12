package com.example.myapi.controller;

import com.example.myapi.model.Contrato;
import com.example.myapi.service.ContratoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contratos")
public class ContratoController {

    @Autowired
    private ContratoService contratoService;

    @PostMapping
    public Contrato createContrato(@RequestBody Contrato contrato) {
        return contratoService.saveContrato(contrato);
    }

    @PutMapping
    public Contrato updateContrato(@RequestBody Contrato contrato) {
        return contratoService.updateContrato(contrato);
    }

    @GetMapping
    public List<Contrato> getAllContratos() {
        return contratoService.getAllContratos();
    }
}
