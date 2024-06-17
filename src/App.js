// src/App.js
import React from 'react';
import SignIn from './components/SignIn';
import Login from './components/Login';
import { Route, Router } from 'react-router-dom';
import { Container, Switch } from '@mui/material';
import GoogleMap from './components/GoogleMap';
import TableStation from './components/TableStation';
import Test from './test';

function App() {


  return (
    <Container>
      {/* <SignIn/> */}
      {/* <ListStudents/> */}
      {/* <TableStation /> */}
      <SignIn />
       <Test/>
    </Container>


    //<GoogleMap stations={stations}/>

    //  <Router>
    //   <Container maxWidth="sm">
    //     <Switch>
    //       <Route path="/login" component={Login} />
    //      <Route path="/signup" component={SignIn}/>
    //     </Switch>
    //   </Container>
    // </Router>
  );
}

export default App;
