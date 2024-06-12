import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get('/ordensdeservico');
                setOrders(response.data);
            } catch (error) {
                console.error('Failed to fetch orders', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Orders</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Status</TableCell>
                            {/* Add other columns as necessary */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.descricao}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                {/* Add other columns as necessary */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
};

export default Orders;
