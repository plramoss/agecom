import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({
        id: '',
        username: '',
        password: '',
        role: 'ROLE_USER',
        registro: '',
        cargo: '',
        dataAdmissao: ''
    });

    useEffect(() => {
        axios.get('/admin/funcionarios')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    const handleOpen = (employee) => {
        setCurrentEmployee(employee);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEmployee({ ...currentEmployee, [name]: value });
    };

    const handleSubmit = () => {
        axios.put(`/admin/funcionario`, currentEmployee)
            .then(response => {
                setEmployees(employees.map(emp => (emp.id === currentEmployee.id ? response.data : emp)));
                setOpen(false);
            })
            .catch(error => console.error('Error updating employee:', error));
    };

    return (
        <div>
            <h1>Funcionários</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Registro</TableCell>
                            <TableCell>Cargo</TableCell>
                            <TableCell>Data Admissão</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.username}</TableCell>
                                <TableCell>{employee.registro}</TableCell>
                                <TableCell>{employee.cargo}</TableCell>
                                <TableCell>{new Date(employee.dataAdmissao).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleOpen(employee)}>
                                        Modificar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Modificar Funcionário</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={currentEmployee.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="registro"
                        label="Registro"
                        type="text"
                        fullWidth
                        value={currentEmployee.registro}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="cargo"
                        label="Cargo"
                        type="text"
                        fullWidth
                        value={currentEmployee.cargo}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="dataAdmissao"
                        label="Data Admissão"
                        type="date"
                        fullWidth
                        value={currentEmployee.dataAdmissao}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EmployeeList;
