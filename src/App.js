// src/App.js
import React, {useState} from 'react';
import SignIn from './components/SignIn';
import Login from './components/Login';
import {Route, Router} from 'react-router-dom';
import {Container, Switch} from '@mui/material';
import GoogleMap from './components/GoogleMap';
import Test from './test';
import UserProfile from './components/UserProfile';
import Maps from './components/Maps';

function App() {
  return (
    <Container>
      {/* <SignIn/> */}
      {/* <Test/> */}
      <UserProfile/>
      {/* <Maps/> */}
    </Container>
  );
}

export default App;
