package com.example.myapi.controller;

import com.example.myapi.model.Funcionario;
import com.example.myapi.model.Usuario;
import com.example.myapi.repository.UsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Date;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AdminControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setup() {
        Usuario admin = new Usuario();
        admin.setUsername("admin");
        admin.setPassword(new BCryptPasswordEncoder().encode("adminpass"));
        admin.setRole("ROLE_ADMIN");
        usuarioRepository.save(admin);
    }

    @Test
    @WithMockUser(username = "admin", roles = { "ADMIN" })
    public void createFuncionario() throws Exception {
        Funcionario funcionario = new Funcionario();
        funcionario.setUsername("funcionario");
        funcionario.setPassword("funcpass");
        funcionario.setRole("ROLE_USER");
        funcionario.setRegistro("123456");
        funcionario.setCargo("Developer");
        funcionario.setDataAdmissao(new Date());

        mockMvc.perform(MockMvcRequestBuilders.post("/admin/funcionario")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(funcionario)))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", roles = { "ADMIN" })
    public void updateFuncionario() throws Exception {
        Funcionario funcionario = new Funcionario();
        funcionario.setUsername("funcionario");
        funcionario.setPassword("funcpass");
        funcionario.setRole("ROLE_USER");
        funcionario.setRegistro("123456");
        funcionario.setCargo("Developer");
        funcionario.setDataAdmissao(new Date());
        funcionario = usuarioRepository.save(funcionario);

        funcionario.setCargo("Senior Developer");

        mockMvc.perform(MockMvcRequestBuilders.put("/admin/funcionario")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(funcionario)))
                .andExpect(status().isOk());
    }
}
