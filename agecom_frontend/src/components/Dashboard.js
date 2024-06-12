import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                <Button variant="contained" color="secondary" onClick={handleLogout}>
                    Logout
                </Button>
                <List>
                    <ListItem button component={Link} to="/clients">
                        <ListItemText primary="Clients" />
                    </ListItem>
                    <ListItem button component={Link} to="/contracts">
                        <ListItemText primary="Contracts" />
                    </ListItem>
                    <ListItem button component={Link} to="/orders">
                        <ListItemText primary="Orders" />
                    </ListItem>
                    {role === 'ROLE_ADMIN' && (
                        <ListItem button component={Link} to="/register">
                            <ListItemText primary="Register Employee" />
                        </ListItem>
                    )}
                </List>
            </Box>
        </Container>
    );
};

export default Dashboard;
