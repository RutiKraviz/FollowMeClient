import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Route () {

    const username = useSelector(state => state.auth.username);

  return (
    <Container maxWidth="sm">
   <Typography>hi {username} the route here!! </Typography>
    </Container>
  );
}

