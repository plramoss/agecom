package com.example.myapi.service;

import com.example.myapi.model.Cliente;
import com.example.myapi.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Cliente updateCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
