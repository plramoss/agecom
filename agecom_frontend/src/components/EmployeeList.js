import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
    Box,
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setEmployees(response.data);
            } catch (error) {
                console.error('Erro ao buscar funcionários:', error);
            }
        };

        fetchEmployees();
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
                  Lista de Funcionários
              </Typography>
              <TableContainer>
                  <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell>Nome de Usuário</TableCell>
                              <TableCell>Registro</TableCell>
                              <TableCell>Cargo</TableCell>
                              <TableCell>Data de Admissão</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.username}</TableCell>
                                <TableCell>{employee.registro}</TableCell>
                                <TableCell>{employee.cargo}</TableCell>
                                <TableCell>{employee.dataAdmissao}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
      </Container>
    );
};

export default EmployeeList;
