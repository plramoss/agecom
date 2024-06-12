package com.example.myapi.controller;

import com.example.myapi.model.Funcionario;
import com.example.myapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/funcionario")
    public Funcionario createFuncionario(@RequestBody Funcionario funcionario) {
        return usuarioService.saveFuncionario(funcionario);
    }

    @PutMapping("/funcionario")
    public Funcionario updateFuncionario(@RequestBody Funcionario funcionario) {
        return usuarioService.updateFuncionario(funcionario);
    }

    @GetMapping("/funcionarios")
    public List<Funcionario> getAllFuncionarios() {
        return usuarioService.getAllFuncionarios();
    }
}
