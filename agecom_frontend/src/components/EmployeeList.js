import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Box, Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const EmployeeList = () => {
    const [funcionarios, setFuncionarios] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response = await axios.get('/api/funcionarios', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setFuncionarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar funcionários!', error);
            }
        };

        fetchFuncionarios();
    }, [user]);

    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lista de Funcionários
                </Typography>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Cargo</TableCell>
                                <TableCell>Data de Admissão</TableCell>
                                <TableCell>Registro</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {funcionarios.map((funcionario) => (
                                <TableRow key={funcionario.id}>
                                    <TableCell>{funcionario.id}</TableCell>
                                    <TableCell>{funcionario.nome}</TableCell>
                                    <TableCell>{funcionario.cargo}</TableCell>
                                    <TableCell>{funcionario.dataAdmissao}</TableCell>
                                    <TableCell>{funcionario.registro}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Container>
    );
};

export default EmployeeList;
