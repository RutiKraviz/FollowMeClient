import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  // הגדרת משתנים סטייט לכל פרט משתמש
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  // פונקציות לעדכון כל פרט משתמש
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleUpdeteUser = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate('/Map');
  };

  return (
    <div style={{maxWidth: '400px', margin: 'auto'}}>
      <h2 style={{textAlign: 'center', marginBottom: '20px'}}>עדכון פרטי משתמש</h2>
      <form>
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>שם פרטי:</label>
          <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>שם משפחה:</label>
          <input
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>כתובת:</label>
          <input
            type='address'
            value={address}
            onChange={handleAddressChange}
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>עיר:</label>
          <input
            type='city'
            value={city}
            onChange={handleCityChange}
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>כתובת מייל:</label>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
        </div>
      </form>
      <Button variant='contained' color='primary' onClick={handleUpdeteUser}>
        שמירה
      </Button>
      {/* <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>שם: {firstName} {lastName}</p>
        <p style={{ fontSize: '18px' }}>מייל: {email}</p>
      </div> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle textAlign={'center'} id='alert-dialog-title'>
          {'עדכון פרטים'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>!הפרטים שלך נשמרו בהצלחה במערכת.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
