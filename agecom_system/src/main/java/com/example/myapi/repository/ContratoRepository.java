package com.example.myapi.repository;

import com.example.myapi.model.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContratoRepository extends JpaRepository<Contrato, Long> {
}
