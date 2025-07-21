import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        {/* Add your logo image here */}
        <img 
          src="data:image/png;base64,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" 
          alt="Logo" 
          style={{ height: '32px', marginRight: '8px', verticalAlign: 'middle' }} 
        />
        DileepACCA
      </div>
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
