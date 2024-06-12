import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const Contracts = () => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await api.get('/contratos');
                setContracts(response.data);
            } catch (error) {
                console.error('Failed to fetch contracts', error);
            }
        };

        fetchContracts();
    }, []);

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Contracts</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Type</TableCell>
                            {/* Add other columns as necessary */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contracts.map((contract) => (
                            <TableRow key={contract.id}>
                                <TableCell>{contract.id}</TableCell>
                                <TableCell>{contract.status}</TableCell>
                                <TableCell>{contract.tipo}</TableCell>
                                {/* Add other columns as necessary */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
};

export default Contracts;
