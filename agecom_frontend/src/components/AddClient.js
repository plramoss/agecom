import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {Box, Container} from "@mui/material";

const AddClient = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [clientType, setClientType] = useState('');
  const [cpf, setCpf] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [foundationDate, setFoundationDate] = useState('');
  const [addressId, setAddressId] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = {
      email,
      contact,
      clientType,
      addressId,
      cpf: clientType === 'Pessoa Física' ? cpf : undefined,
      fullName: clientType === 'Pessoa Física' ? fullName : undefined,
      birthDate: clientType === 'Pessoa Física' ? birthDate : undefined,
      cnpj: clientType === 'Pessoa Jurídica' ? cnpj : undefined,
      businessName: clientType === 'Pessoa Jurídica' ? businessName : undefined,
      tradeName: clientType === 'Pessoa Jurídica' ? tradeName : undefined,
      foundationDate: clientType === 'Pessoa Jurídica' ? foundationDate : undefined,
    };

    try {
      await axios.post('/api/clients', clientData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Client created successfully');
    } catch (error) {
      console.error('There was an error creating the client!', error);
    }
  };

  return (
    <Container>
      <Box>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label>Contact:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required/>
          <label>Client Type:</label>
          <select value={clientType} onChange={(e) => setClientType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="Pessoa Física">Pessoa Física</option>
            <option value="Pessoa Jurídica">Pessoa Jurídica</option>
          </select>
          {clientType === 'Pessoa Física' && (
            <>
              <label>CPF:</label>
              <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
              <label>Full Name:</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
              <label>Birth Date:</label>
              <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required/>
            </>
          )}
          {clientType === 'Pessoa Jurídica' && (
            <>
              <label>CNPJ:</label>
              <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required/>
              <label>Business Name:</label>
              <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required/>
              <label>Trade Name:</label>
              <input type="text" value={tradeName} onChange={(e) => setTradeName(e.target.value)} required/>
              <label>Foundation Date:</label>
              <input type="date" value={foundationDate} onChange={(e) => setFoundationDate(e.target.value)} required/>
            </>
          )}
          <label>Address ID:</label>
          <input type="text" value={addressId} onChange={(e) => setAddressId(e.target.value)} required/>
          <button type="submit">Create Client</button>
        </form>
      </Box>
    </Container>
  );
};

export default AddClient;
