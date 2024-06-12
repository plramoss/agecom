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

const Contracts = () => {
    const [contracts, setContracts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await axios.get('/api/contracts', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setContracts(response.data);
            } catch (error) {
                console.error('Erro ao buscar contratos:', error);
            }
        };

        fetchContracts();
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
                  Lista de Contratos
              </Typography>
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Status</TableCell>
                              <TableCell>Tipo</TableCell>
                              <TableCell>Cliente ID</TableCell>
                              <TableCell>Preço de Compra/Taxa de Aluguel</TableCell>
                              <TableCell>Termos de Compra/Detalhes da Manutenção</TableCell>
                              <TableCell>Duração em Meses/Período de Aluguel</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {contracts.map((contract) => (
                            <TableRow key={contract.id}>
                                <TableCell>{contract.status}</TableCell>
                                <TableCell>{contract.tipo}</TableCell>
                                <TableCell>{contract.cliente.id}</TableCell>
                                <TableCell>{contract.tipo === 'Contrato de Compra' ? contract.compraPreco : contract.tipo === 'Contrato de Aluguel' ? contract.rentalRate : ''}</TableCell>
                                <TableCell>{contract.tipo === 'Contrato de Compra' ? contract.termosCompra : contract.tipo === 'Contrato de Manutenção' ? contract.detalhesManutencao : ''}</TableCell>
                                <TableCell>{contract.tipo === 'Contrato de Manutenção' ? contract.duracaoEmMeses : contract.tipo === 'Contrato de Aluguel' ? contract.periodoAluguel : ''}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Container>
    );
};

export default Contracts;
