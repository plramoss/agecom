import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material';

const AddClient = () => {
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [tipoCliente, setTipoCliente] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [dataFundacao, setDataFundacao] = useState('');
  const [endereco, setEndereco] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    uf: '',
    localidade: ''
  });

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = {
      email,
      contato,
      tipoCliente,
      endereco,
      cpf: tipoCliente === 'Pessoa Física' ? cpf : undefined,
      nomeCompleto: tipoCliente === 'Pessoa Física' ? nomeCompleto : undefined,
      dataNascimento: tipoCliente === 'Pessoa Física' ? dataNascimento : undefined,
      cnpj: tipoCliente === 'Pessoa Jurídica' ? cnpj : undefined,
      razaoSocial: tipoCliente === 'Pessoa Jurídica' ? razaoSocial : undefined,
      nomeFantasia: tipoCliente === 'Pessoa Jurídica' ? nomeFantasia : undefined,
      dataFundacao: tipoCliente === 'Pessoa Jurídica' ? dataFundacao : undefined,
    };

    try {
      await axios.post('/api/clientes', clientData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Cliente criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar cliente!', error);
    }
  };

  return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Cadastro de Cliente
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Contato"
                type="text"
                fullWidth
                margin="normal"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                required
            />
            <TextField
                label="Tipo de Cliente"
                select
                fullWidth
                margin="normal"
                value={tipoCliente}
                onChange={(e) => setTipoCliente(e.target.value)}
                required
            >
              <MenuItem value="Pessoa Física">Pessoa Física</MenuItem>
              <MenuItem value="Pessoa Jurídica">Pessoa Jurídica</MenuItem>
            </TextField>
            {tipoCliente === 'Pessoa Física' && (
                <>
                  <TextField
                      label="CPF"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      required
                  />
                  <TextField
                      label="Nome Completo"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={nomeCompleto}
                      onChange={(e) => setNomeCompleto(e.target.value)}
                      required
                  />
                  <TextField
                      label="Data de Nascimento"
                      type="date"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                      required
                  />
                </>
            )}
            {tipoCliente === 'Pessoa Jurídica' && (
                <>
                  <TextField
                      label="CNPJ"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      required
                  />
                  <TextField
                      label="Razão Social"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={razaoSocial}
                      onChange={(e) => setRazaoSocial(e.target.value)}
                      required
                  />
                  <TextField
                      label="Nome Fantasia"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={nomeFantasia}
                      onChange={(e) => setNomeFantasia(e.target.value)}
                      required
                  />
                  <TextField
                      label="Data de Fundação"
                      type="date"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      value={dataFundacao}
                      onChange={(e) => setDataFundacao(e.target.value)}
                      required
                  />
                </>
            )}
            <TextField
                label="CEP"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.cep}
                onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })}
                required
            />
            <TextField
                label="Logradouro"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.logradouro}
                onChange={(e) => setEndereco({ ...endereco, logradouro: e.target.value })}
                required
            />
            <TextField
                label="Número"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.numero}
                onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
                required
            />
            <TextField
                label="Complemento"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.complemento}
                onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
            />
            <TextField
                label="Bairro"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.bairro}
                onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
                required
            />
            <TextField
                label="UF"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.uf}
                onChange={(e) => setEndereco({ ...endereco, uf: e.target.value })}
                required
            />
            <TextField
                label="Localidade"
                type="text"
                fullWidth
                margin="normal"
                value={endereco.localidade}
                onChange={(e) => setEndereco({ ...endereco, localidade: e.target.value })}
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Criar Cliente
            </Button>
          </form>
        </Box>
      </Container>
  );
};

export default AddClient;
