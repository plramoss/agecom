import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const AddContract = () => {
  const [status, setStatus] = useState('');
  const [tipo, setTipo] = useState('');
  const [clienteId, setClienteId] = useState('');
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
      tipo,
      cliente: {
        id: clienteId
      },
      compraPreco: tipo === 'Contrato de Compra' ? compraPreco : undefined,
      termosCompra: tipo === 'Contrato de Compra' ? termosCompra : undefined,
      detalhesManutencao: tipo === 'Contrato de Manutenção' ? detalhesManutencao : undefined,
      duracaoEmMeses: tipo === 'Contrato de Manutenção' ? duracaoEmMeses : undefined,
      rentalRate: tipo === 'Contrato de Aluguel' ? rentalRate : undefined,
      periodoAluguel: tipo === 'Contrato de Aluguel' ? periodoAluguel : undefined,
    };

    try {
      await axios.post('/api/contracts', contractData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Contrato criado com sucesso');
    } catch (error) {
      console.error('Houve um erro ao criar o contrato!', error);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Criar Contrato
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <MenuItem value="">
              <em>Selecione o Tipo</em>
            </MenuItem>
            <MenuItem value="Contrato de Compra">Contrato de Compra</MenuItem>
            <MenuItem value="Contrato de Manutenção">Contrato de Manutenção</MenuItem>
            <MenuItem value="Contrato de Aluguel">Contrato de Aluguel</MenuItem>
          </Select>
        </FormControl>
        {tipo === 'Contrato de Compra' && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Preço de Compra"
              value={compraPreco}
              onChange={(e) => setCompraPreco(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Termos de Compra"
              value={termosCompra}
              onChange={(e) => setTermosCompra(e.target.value)}
            />
          </>
        )}
        {tipo === 'Contrato de Manutenção' && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Detalhes da Manutenção"
              value={detalhesManutencao}
              onChange={(e) => setDetalhesManutencao(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Duração em Meses"
              value={duracaoEmMeses}
              onChange={(e) => setDuracaoEmMeses(e.target.value)}
            />
          </>
        )}
        {tipo === 'Contrato de Aluguel' && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Taxa de Aluguel"
              value={rentalRate}
              onChange={(e) => setRentalRate(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Período de Aluguel"
              value={periodoAluguel}
              onChange={(e) => setPeriodoAluguel(e.target.value)}
            />
          </>
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          label="ID do Cliente"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Criar Contrato
        </Button>
      </Box>
    </Container>
  );
};

export default AddContract;
