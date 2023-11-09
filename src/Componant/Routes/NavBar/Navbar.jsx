import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link" >Home</NavLink>
      <NavLink to="/service" className="nav-link" >Service</NavLink>
      <NavLink to="/about" className="nav-link" >About</NavLink>
    </nav>
  );
}

export default Navbar;
