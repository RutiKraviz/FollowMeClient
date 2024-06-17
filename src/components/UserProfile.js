import React, { useState } from 'react';

export default function UserProfile() {
  // הגדרת משתנים סטייט לכל פרט משתמש
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>עדכון פרטי משתמש</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>שם פרטי:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>שם משפחה:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>כתובת מייל:</label>
          <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
      </form>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>שם: {firstName} {lastName}</p>
        <p style={{ fontSize: '18px' }}>מייל: {email}</p>
      </div>
    </div>
  );
};
