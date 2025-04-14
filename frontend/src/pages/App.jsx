import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/inquiry/greeting')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#6a1b9a' }}>EternalpEASE</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
