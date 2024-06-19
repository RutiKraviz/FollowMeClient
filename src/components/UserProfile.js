import {Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, circularProgressClasses} from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { SaveDetails } from '../services/authService';
// import { useNavigate } from 'react-router-dom';

const cities = [
  'Jerusalem',
  'Tel Aviv',
  'Haifa',
  'Rishon LeZion',
  'Petah Tikva',
  'Ashdod',
  'Netanya',
  'Beer Sheva',
  'Holon',
  'Bnei Brak',
  'Ramat Gan',
  'Bat Yam',
  'Rehovot',
  'Herzliya',
  'Kfar Saba',
  'Modiin',
  // Add more cities as needed
];

export default function UserProfile() {
  // הגדרת משתנים סטייט לכל פרט משתמש
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleUpdeteUser = (e) => {
    e.preventDefault();
    console.log(`Details saved: firstName: ${firstName}, lastName: ${lastName}, address: ${address}, city: ${city}, email: ${email}`);
    dispatch(SaveDetails(e));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate('/Map');
  };

  return (
    <Container maxWidth='sm'>
       <Typography variant='h4' gutterBottom>
        Update User Profile
      </Typography>
      <TextField label='FirstName' variant='outlined' fullWidth margin='normal' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <TextField label='LastName' variant='outlined' fullWidth margin='normal' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <TextField label='Address' variant='outlined' fullWidth margin='normal' value={address} onChange={(e) => setAddress(e.target.value)} />
       <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
            >
              {cities && cities.map((cityName) => (
                <MenuItem key={cityName} value={cityName}>{cityName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      <TextField label='Email' variant='outlined' fullWidth margin='normal' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant='contained' color='primary' onClick={handleUpdeteUser}>
        save
      </Button>
      {/* <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>שם: {firstName} {lastName}</p>
        <p style={{ fontSize: '18px' }}>מייל: {email}</p>
      </div> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle textAlign={'center'} id='alert-dialog-title'>
        {'Update Details'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Your details have been successfully saved!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            clase
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
