import React, { useState } from 'react';
import api from '../services/api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const RegisterEmployee = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registro, setRegistro] = useState('');
    const [cargo, setCargo] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('/admin/funcionario', { username, password, registro, cargo, dataAdmissao });
            // Adicione lógica adicional de sucesso se necessário
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Register Employee</Typography>
                <form onSubmit={handleRegister}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Registro"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={registro}
                        onChange={(e) => setRegistro(e.target.value)}
                    />
                    <TextField
                        label="Cargo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                    <TextField
                        label="Data de Admissão"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        value={dataAdmissao}
                        onChange={(e) => setDataAdmissao(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterEmployee;
