import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          EdTech<span className="dot">.</span>
        </div>
        
        <nav className="nav-links">
          <a href="#services" className="active-pill">Services</a>
          <a href="#courses" className="dropdown-link">Courses <ChevronDown size={16} /></a>
          <a href="#learning">Learning</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-outline nav-btn">Login</button>
          <button className="btn btn-gradient nav-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
