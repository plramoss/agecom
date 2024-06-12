import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const AddServiceOrder = () => {
  const [description, setDescription] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [status, setStatus] = useState('');
  const [contractId, setContractId] = useState('');

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceOrderData = {
      description,
      creationDate,
      status,
      contractId,
    };

    try {
      await axios.post('/api/service-orders', serviceOrderData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('Service order created successfully');
    } catch (error) {
      console.error('There was an error creating the service order!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <label>Creation Date:</label>
      <input type="date" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} required />
      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
      <label>Contract ID:</label>
      <input type="text" value={contractId} onChange={(e) => setContractId(e.target.value)} required />
      <button type="submit">Create Service Order</button>
    </form>
  );
};

export default AddServiceOrder;
