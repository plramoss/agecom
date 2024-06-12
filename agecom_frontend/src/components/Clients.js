import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await api.get('/clientes');
                setClients(response.data);
            } catch (error) {
                console.error('Failed to fetch clients', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Clients</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell>Type</TableCell>
                            {/* Add other columns as necessary */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients && clients.map((client) => (
                            <TableRow key={client.id}>
                                <TableCell>{client.id}</TableCell>
                                <TableCell>{client.email}</TableCell>
                                <TableCell>{client.contato}</TableCell>
                                <TableCell>{client.tipo}</TableCell>
                                {/* Add other columns as necessary */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
};

export default Clients;
