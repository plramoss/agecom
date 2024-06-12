import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddClient from './components/AddClient';
import AddContract from './components/AddContract';
import AddServiceOrder from './components/AddServiceOrder';
import RegisterEmployee from "./components/RegisterEmployee";
import Contracts from "./components/Contracts";
import Clients from "./components/Clients";
import Orders from "./components/Orders";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro/cliente" element={<PrivateRoute><Dashboard><AddClient /></Dashboard></PrivateRoute>} />
          <Route path="/cadastro/contrato" element={<PrivateRoute><Dashboard><AddContract /></Dashboard></PrivateRoute>} />
          <Route path="/cadastro/ordem-de-servico" element={<PrivateRoute><Dashboard><AddServiceOrder/></Dashboard></PrivateRoute>} />
          <Route path="/cadastro/funcionario" element={<PrivateRoute><Dashboard><RegisterEmployee/></Dashboard></PrivateRoute>} />
          <Route path="/clientes" element={<PrivateRoute><Dashboard><Clients /></Dashboard></PrivateRoute>} />
          <Route path="/contratos" element={<PrivateRoute><Dashboard><Contracts /></Dashboard></PrivateRoute>} />
          <Route path="/ordens-de-servico" element={<PrivateRoute><Dashboard><Orders /></Dashboard></PrivateRoute>} />
          <Route path="/funcionarios" element={<PrivateRoute><Dashboard><EmployeeList /></Dashboard></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : children;
}

export default App;
