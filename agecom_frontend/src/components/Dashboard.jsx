import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, List, ListItem, ListItemText } from '@mui/material';

export default function Layout({children}){
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };
    return (
      <div className={"containerLayout"}>
          <div className={"boxSidebar"}>
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
                  <ListItem button component={Link} to="/orders">
                      <Button className={"logoutBtn"} variant="contained" color="secondary" onClick={handleLogout}>
                          Logout
                      </Button>
                  </ListItem>
              </List>
          </div>
          <div className={"boxContent"}>
              {children}
          </div>
      </div>
    );
}
