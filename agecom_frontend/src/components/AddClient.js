import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const AddClient = () => {
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [tipo, setTipo] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [dataFundacao, setDataFundacao] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [localidade, setLocalidade] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = {
      email,
      contato,
      tipo,
      cpf: tipo === 'Pessoa Física' ? cpf : undefined,
      nomeCompleto: tipo === 'Pessoa Física' ? nomeCompleto : undefined,
      dataNascimento: tipo === 'Pessoa Física' ? dataNascimento : undefined,
      cnpj: tipo === 'Pessoa Jurídica' ? cnpj : undefined,
      razaoSocial: tipo === 'Pessoa Jurídica' ? razaoSocial : undefined,
      nomeFantasia: tipo === 'Pessoa Jurídica' ? nomeFantasia : undefined,
      dataFundacao: tipo === 'Pessoa Jurídica' ? dataFundacao : undefined,
      endereco: {
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        uf,
        localidade
      }
    };

    try {
      await axios.post('/api/clients', clientData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Cliente criado com sucesso');
    } catch (error) {
      console.error('Houve um erro ao criar o cliente!', error);
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
          Criar Cliente
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <MenuItem value="">
              <em>Selecione o Tipo</em>
            </MenuItem>
            <MenuItem value="Pessoa Física">Pessoa Física</MenuItem>
            <MenuItem value="Pessoa Jurídica">Pessoa Jurídica</MenuItem>
          </Select>
        </FormControl>
        {tipo === 'Pessoa Física' && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome Completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </>
        )}
        {tipo === 'Pessoa Jurídica' && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              label="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Razão Social"
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome Fantasia"
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Data de Fundação"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dataFundacao}
              onChange={(e) => setDataFundacao(e.target.value)}
            />
          </>
        )}
        <Typography component="h2" variant="h6">
          Endereço
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Complemento"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="UF"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Criar Cliente
        </Button>
      </Box>
    </Container>
  );
};

export default AddClient;
