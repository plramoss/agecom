import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const AddServiceOrder = () => {
  const [descricao, setDescricao] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [status, setStatus] = useState('');
  const [contratoId, setContratoId] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceOrderData = {
      descricao,
      dataCriacao,
      status,
      contrato: {
        id: contratoId
      }
    };

    try {
      await axios.post('/api/service-orders', serviceOrderData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Ordem de serviço criada com sucesso');
    } catch (error) {
      console.error('Houve um erro ao criar a ordem de serviço!', error);
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
          Criar Ordem de Serviço
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Data de Criação"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={dataCriacao}
          onChange={(e) => setDataCriacao(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="ID do Contrato"
          value={contratoId}
          onChange={(e) => setContratoId(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Criar Ordem de Serviço
        </Button>
      </Box>
    </Container>
  );
};

export default AddServiceOrder;
