// src/components/SignIn.js
import React, {useState} from 'react';
import {Button, TextField, Typography, Container, Dialog} from '@mui/material';
import {logInTest, signIn} from '../services/authService'; // Import the signIn function from authService
import {useDispatch} from 'react-redux';
import axiosInstance from '../api';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const user = {name: 'RUTH', password: 'ab178'}; // await signIn(username, password);//TODO: FIX - GET FROM SERVER
      dispatch(SignIn({username, password}));
      // Redirect to dashboard or do something else upon successful sign-in
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in error, e.g., show error message to user
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        Sign In
      </Typography>
      <TextField label='Username' variant='outlined' fullWidth margin='normal' value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        fullWidth
        margin='normal'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant='contained' color='primary' onClick={handleSignIn}>
        Sign In
      </Button>
    </Container>
  );
}
