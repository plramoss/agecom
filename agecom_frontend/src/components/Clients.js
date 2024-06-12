import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/api/clients', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setClients(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };

        fetchClients();
    }, [user]);

    return (
      <Container>
          <Box
            sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
          >
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                  Lista de Clientes
              </Typography>
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Email</TableCell>
                              <TableCell>Contato</TableCell>
                              <TableCell>Tipo</TableCell>
                              <TableCell>CPF/CNPJ</TableCell>
                              <TableCell>Nome/Razão Social</TableCell>
                              <TableCell>Data de Nascimento/Fundação</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {clients.map((client) => (
                            <TableRow key={client.id}>
                                <TableCell>{client.email}</TableCell>
                                <TableCell>{client.contato}</TableCell>
                                <TableCell>{client.tipo}</TableCell>
                                <TableCell>{client.tipo === 'Pessoa Física' ? client.cpf : client.cnpj}</TableCell>
                                <TableCell>{client.tipo === 'Pessoa Física' ? client.nomeCompleto : client.razaoSocial}</TableCell>
                                <TableCell>{client.tipo === 'Pessoa Física' ? client.dataNascimento : client.dataFundacao}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Container>
    );
};

export default Clients;
