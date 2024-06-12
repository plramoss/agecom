import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/user/login', { username, password });
      const userData = {
        username,
        token: response.data.token,
        role: response.data.role
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      // navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // navigate('/login');
  };

  useEffect(() => {
    if (!user) {
      // navigate('/login');
    }
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
