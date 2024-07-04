import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
