import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material';

const AddContract = () => {
  const [status, setStatus] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [tipo, setTipo] = useState('');
  const [compraPreco, setCompraPreco] = useState('');
  const [termosCompra, setTermosCompra] = useState('');
  const [detalhesManutencao, setDetalhesManutencao] = useState('');
  const [duracaoEmMeses, setDuracaoEmMeses] = useState('');
  const [rentalRate, setRentalRate] = useState('');
  const [periodoAluguel, setPeriodoAluguel] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contractData = {
      status,
      clienteId,
      tipo,
      compraPreco: tipo === 'ContratoDeCompra' ? compraPreco : undefined,
      termosCompra: tipo === 'ContratoDeCompra' ? termosCompra : undefined,
      detalhesManutencao: tipo === 'ContratoDeManutencao' ? detalhesManutencao : undefined,
      duracaoEmMeses: tipo === 'ContratoDeManutencao' ? duracaoEmMeses : undefined,
      rentalRate: tipo === 'ContratoDeAluguel' ? rentalRate : undefined,
      periodoAluguel: tipo === 'ContratoDeAluguel' ? periodoAluguel : undefined,
    };

    try {
      await axios.post('/api/contratos', contractData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Contrato criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar contrato!', error);
    }
  };

  return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Cadastro de Contrato
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                label="Status"
                type="text"
                fullWidth
                margin="normal"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            />
            <TextField
                label="ID do Cliente"
                type="text"
                fullWidth
                margin="normal"
                value={clienteId}
                onChange={(e) => setClienteId(e.target.value)}
                required
            />
            <TextField
                label="Tipo de Contrato"
                select
                fullWidth
                margin="normal"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
            >
              <MenuItem value="ContratoDeCompra">Contrato de Compra</MenuItem>
              <MenuItem value="ContratoDeManutencao">Contrato de Manutenção</MenuItem>
              <MenuItem value="ContratoDeAluguel">Contrato de Aluguel</MenuItem>
            </TextField>
            {tipo === 'ContratoDeCompra' && (
                <>
                  <TextField
                      label="Preço de Compra"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={compraPreco}
                      onChange={(e) => setCompraPreco(e.target.value)}
                      required
                  />
                  <TextField
                      label="Termos de Compra"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={termosCompra}
                      onChange={(e) => setTermosCompra(e.target.value)}
                      required
                  />
                </>
            )}
            {tipo === 'ContratoDeManutencao' && (
                <>
                  <TextField
                      label="Detalhes da Manutenção"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={detalhesManutencao}
                      onChange={(e) => setDetalhesManutencao(e.target.value)}
                      required
                  />
                  <TextField
                      label="Duração em Meses"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={duracaoEmMeses}
                      onChange={(e) => setDuracaoEmMeses(e.target.value)}
                      required
                  />
                </>
            )}
            {tipo === 'ContratoDeAluguel' && (
                <>
                  <TextField
                      label="Taxa de Aluguel"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={rentalRate}
                      onChange={(e) => setRentalRate(e.target.value)}
                      required
                  />
                  <TextField
                      label="Período de Aluguel"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={periodoAluguel}
                      onChange={(e) => setPeriodoAluguel(e.target.value)}
                      required
                  />
                </>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Criar Contrato
            </Button>
          </form>
        </Box>
      </Container>
  );
};

export default AddContract;
