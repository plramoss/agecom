package com.example.myapi.controller;

import com.example.myapi.model.Usuario;
import com.example.myapi.repository.UsuarioRepository;
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

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @BeforeEach
    public void setup() {
        Usuario usuario = new Usuario();
        usuario.setUsername("testuser");
        usuario.setPassword(new BCryptPasswordEncoder().encode("testpass"));
        usuario.setRole("ROLE_USER");
        usuarioRepository.save(usuario);
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"USER"})
    public void loginSuccess() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/user/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"testuser\", \"password\":\"testpass\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Login successful"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"USER"})
    public void loginFailure() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/user/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"wronguser\", \"password\":\"wrongpass\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Login failed"));
    }
}
