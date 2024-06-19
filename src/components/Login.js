// src/components/Login.js
import React from 'react';
import {Button, TextField, Typography, Container} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const Login = () => {
    navigate('/Map');
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        Login
      </Typography>
      <TextField label='Username' variant='outlined' fullWidth margin='normal' />
      <TextField label='Password' type='password' variant='outlined' fullWidth margin='normal' />
      <Button variant='contained' color='primary'>
        Login
      </Button>
    </Container>
  );
}
