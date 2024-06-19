import React from 'react';
import {Button, TextField, Typography, Container} from '@mui/material';
import {useSelector} from 'react-redux';
import {Routes} from 'react-router-dom';
import GoogleMap from './GoogleMap';

export default function Route() {
  const username = useSelector((state) => state.auth.username);

  return (
    <Container maxWidth='sm'>
      <Routes>
        <Route path='/Map' element={<GoogleMap />} />
      </Routes>
    </Container>
  );
}
