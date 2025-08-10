import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    if (email === 'Admin' && password === 'admin') {
      setMsg('Login successful!');
      setTimeout(() => {
        navigate('/');
      }, 1000); // Redirect after 1 second
    } else {
      setMsg('Invalid credentials');
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '60px auto',
      padding: '32px',
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,95,115,0.10)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#005f73', marginBottom: '24px' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '8px',
            background: '#005f73',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
      {msg && <div style={{ marginTop: '18px', color: msg === 'Login successful!' ? '#0a9396' : '#d90429' }}>{msg}</div>}
    </div>
  );
}

export default Login;