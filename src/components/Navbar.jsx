import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
      padding: '18px 0',
      background: 'rgba(255,255,255,0.85)',
      boxShadow: '0 2px 12px rgba(0,95,115,0.08)',
      borderRadius: '0 0 16px 16px',
      marginBottom: '24px',
    }}>
      <Link to="/" style={{ fontWeight: 'bold', color: '#005f73', textDecoration: 'none', fontSize: '1.1rem' }}>
        Home
      </Link>
      <Link to="/courses" style={{ fontWeight: 'bold', color: '#005f73', textDecoration: 'none', fontSize: '1.1rem' }}>
        Courses
      </Link>
      <Link to="/course-videos" style={{ fontWeight: 'bold', color: '#005f73', textDecoration: 'none', fontSize: '1.1rem' }}>
        Course Videos
      </Link>
      <Link to="/about" style={{ fontWeight: 'bold', color: '#005f73', textDecoration: 'none', fontSize: '1.1rem' }}>
        About
      </Link>
      <Link to="/contact" style={{ fontWeight: 'bold', color: '#005f73', textDecoration: 'none', fontSize: '1.1rem' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
