import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from '@mui/material';

const RegisterEmployee = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registro, setRegistro] = useState('');
    const [cargo, setCargo] = useState('');
    const [dataAdmissao, setDataAdmissao] = useState('');

    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeData = {
            username,
            password,
            registro,
            cargo,
            dataAdmissao
        };

        try {
            await axios.post('/api/employees', employeeData, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            alert('Funcionário registrado com sucesso');
        } catch (error) {
            console.error('Houve um erro ao registrar o funcionário!', error);
        }
    };

    return (
      <Container>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
          >
              <Typography component="h1" variant="h5">
                  Registrar Funcionário
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Nome de Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Registro"
                value={registro}
                onChange={(e) => setRegistro(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Data de Admissão"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                value={dataAdmissao}
                onChange={(e) => setDataAdmissao(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                  Registrar Funcionário
              </Button>
          </Box>
      </Container>
    );
};

export default RegisterEmployee;
