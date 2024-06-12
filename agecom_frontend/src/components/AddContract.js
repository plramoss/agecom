import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const AddContract = () => {
  const [status, setStatus] = useState('');
  const [clientId, setClientId] = useState('');
  const [contractType, setContractType] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [purchaseTerms, setPurchaseTerms] = useState('');
  const [maintenanceDetails, setMaintenanceDetails] = useState('');
  const [maintenanceDuration, setMaintenanceDuration] = useState('');
  const [rentalRate, setRentalRate] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contractData = {
      status,
      clientId,
      contractType,
      purchasePrice: contractType === 'ContratoDeCompra' ? purchasePrice : undefined,
      purchaseTerms: contractType === 'ContratoDeCompra' ? purchaseTerms : undefined,
      maintenanceDetails: contractType === 'ContratoDeManutencao' ? maintenanceDetails : undefined,
      maintenanceDuration: contractType === 'ContratoDeManutencao' ? maintenanceDuration : undefined,
      rentalRate: contractType === 'ContratoDeAluguel' ? rentalRate : undefined,
      rentalPeriod: contractType === 'ContratoDeAluguel' ? rentalPeriod : undefined,
    };

    try {
      await axios.post('/api/contracts', contractData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Contract created successfully');
    } catch (error) {
      console.error('There was an error creating the contract!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
      <label>Client ID:</label>
      <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} required />
      <label>Contract Type:</label>
      <select value={contractType} onChange={(e) => setContractType(e.target.value)} required>
        <option value="">Select Type</option>
        <option value="ContratoDeCompra">Contrato de Compra</option>
        <option value="ContratoDeManutencao">Contrato de Manutenção</option>
        <option value="ContratoDeAluguel">Contrato de Aluguel</option>
      </select>
      {contractType === 'ContratoDeCompra' && (
        <>
          <label>Purchase Price:</label>
          <input type="text" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} required />
          <label>Purchase Terms:</label>
          <input type="text" value={purchaseTerms} onChange={(e) => setPurchaseTerms(e.target.value)} required />
        </>
      )}
      {contractType === 'ContratoDeManutencao' && (
        <>
          <label>Maintenance Details:</label>
          <input type="text" value={maintenanceDetails} onChange={(e) => setMaintenanceDetails(e.target.value)} required />
          <label>Maintenance Duration (months):</label>
          <input type="number" value={maintenanceDuration} onChange={(e) => setMaintenanceDuration(e.target.value)} required />
        </>
      )}
      {contractType === 'ContratoDeAluguel' && (
        <>
          <label>Rental Rate:</label>
          <input type="text" value={rentalRate} onChange={(e) => setRentalRate(e.target.value)} required />
          <label>Rental Period:</label>
          <input type="text" value={rentalPeriod} onChange={(e) => setRentalPeriod(e.target.value)} required />
        </>
      )}
      <button type="submit">Create Contract</button>
    </form>
  );
};

export default AddContract;
