package com.example.myapi.controller;

import com.example.myapi.model.Cliente;
import com.example.myapi.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteService.saveCliente(cliente);
    }

    @PutMapping
    public Cliente updateCliente(@RequestBody Cliente cliente) {
        return clienteService.updateCliente(cliente);
    }

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }
}
