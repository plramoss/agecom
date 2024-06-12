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

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/service-orders', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Erro ao buscar ordens de serviço:', error);
            }
        };

        fetchOrders();
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
                  Lista de Ordens de Serviço
              </Typography>
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Descrição</TableCell>
                              <TableCell>Data de Criação</TableCell>
                              <TableCell>Status</TableCell>
                              <TableCell>Contrato ID</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.descricao}</TableCell>
                                <TableCell>{order.dataCriacao}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>{order.contrato.id}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Container>
    );
};

export default Orders;
