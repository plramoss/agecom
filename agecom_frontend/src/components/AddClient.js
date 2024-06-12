import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Container } from '@mui/material';

const AddClient = () => {
    const [clientType, setClientType] = useState('Pessoa Física');
    const [clientData, setClientData] = useState({
        email: '',
        contato: '',
        dataCadastro: '',
        tipo: 'Pessoa Física',
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            uf: '',
            localidade: ''
        },
        contrato: {
            status: '',
            tipo: ''
        },
        cpf: '',
        nomeCompleto: '',
        dataNascimento: '',
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        dataFundacao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            endereco: { ...clientData.endereco, [name]: value }
        });
    };

    const handleContractChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            contrato: { ...clientData.contrato, [name]: value }
        });
    };

    const handleSubmit = () => {
        axios.post('/admin/cliente', clientData)
            .then(response => {
                console.log('Cliente cadastrado com sucesso:', response.data);
                setClientData({
                    email: '',
                    contato: '',
                    dataCadastro: '',
                    tipo: 'Pessoa Física',
                    endereco: {
                        cep: '',
                        logradouro: '',
                        numero: '',
                        complemento: '',
                        bairro: '',
                        uf: '',
                        localidade: ''
                    },
                    contrato: {
                        status: '',
                        tipo: ''
                    },
                    cpf: '',
                    nomeCompleto: '',
                    dataNascimento: '',
                    cnpj: '',
                    razaoSocial: '',
                    nomeFantasia: '',
                    dataFundacao: ''
                });
            })
            .catch(error => console.error('Error creating client:', error));
    };

    return (
        <Container>
            <h1>Cadastrar Cliente</h1>
            <FormControl fullWidth margin="normal">
                <InputLabel id="client-type-label">Tipo de Cliente</InputLabel>
                <Select
                    labelId="client-type-label"
                    name="tipo"
                    value={clientType}
                    onChange={(e) => {
                        setClientType(e.target.value);
                        handleChange(e);
                    }}
                >
                    <MenuItem value="Pessoa Física">Pessoa Física</MenuItem>
                    <MenuItem value="Pessoa Jurídica">Pessoa Jurídica</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Email"
                name="email"
                value={clientData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contato"
                name="contato"
                value={clientData.contato}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Data de Cadastro"
                name="dataCadastro"
                type="date"
                value={clientData.dataCadastro}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <h3>Endereço</h3>
            <TextField
                label="CEP"
                name="cep"
                value={clientData.endereco.cep}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Logradouro"
                name="logradouro"
                value={clientData.endereco.logradouro}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Número"
                name="numero"
                value={clientData.endereco.numero}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Complemento"
                name="complemento"
                value={clientData.endereco.complemento}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Bairro"
                name="bairro"
                value={clientData.endereco.bairro}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="UF"
                name="uf"
                value={clientData.endereco.uf}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Localidade"
                name="localidade"
                value={clientData.endereco.localidade}
                onChange={handleAddressChange}
                fullWidth
                margin="normal"
            />
            <h3>Contrato</h3>
            <TextField
                label="Status"
                name="status"
                value={clientData.contrato.status}
                onChange={handleContractChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel id="contract-type-label">Tipo de Contrato</InputLabel>
                <Select
                    labelId="contract-type-label"
                    name="tipo"
                    value={clientData.contrato.tipo}
                    onChange={handleContractChange}
                >
                    <MenuItem value="ContratoDeCompra">Contrato de Compra</MenuItem>
                    <MenuItem value="ContratoDeManutencao">Contrato de Manutenção</MenuItem>
                    <MenuItem value="ContratoDeAluguel">Contrato de Aluguel</MenuItem>
                </Select>
            </FormControl>

            {clientType === 'Pessoa Física' ? (
                <>
                    <TextField
                        label="CPF"
                        name="cpf"
                        value={clientData.cpf}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Nome Completo"
                        name="nomeCompleto"
                        value={clientData.nomeCompleto}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Data de Nascimento"
                        name="dataNascimento"
                        type="date"
                        value={clientData.dataNascimento}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                </>
            ) : (
                <>
                    <TextField
                        label="CNPJ"
                        name="cnpj"
                        value={clientData.cnpj}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Razão Social"
                        name="razaoSocial"
                        value={clientData.razaoSocial}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Nome Fantasia"
                        name="nomeFantasia"
                        value={clientData.nomeFantasia}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Data de Fundação"
                        name="dataFundacao"
                        type="date"
                        value={clientData.dataFundacao}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                </>
            )}

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '20px' }}
            >
                Cadastrar Cliente
            </Button>
        </Container>
    );
};

export default AddClient;
