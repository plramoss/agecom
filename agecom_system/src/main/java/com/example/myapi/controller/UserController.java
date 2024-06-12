package com.example.myapi.controller;

import com.example.myapi.model.Usuario;
import com.example.myapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {
        Usuario foundUser = usuarioService.findByUsername(usuario.getUsername());
        if (foundUser != null && passwordEncoder.matches(usuario.getPassword(), foundUser.getPassword())) {
            return "Login successful";
        } else {
            return "Login failed";
        }
    }

    @PostMapping("/logout")
    public String logout() {
        return "Logout successful";
    }
}
