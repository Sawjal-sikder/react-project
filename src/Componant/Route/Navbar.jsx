import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"  className="nav-link" >Home</NavLink>
      <NavLink to="/blog"  className="nav-link" >Blog</NavLink>
      <NavLink to="/contract"  className="nav-link" >Contract</NavLink>
    </nav>
  );
}

export default Navbar;
