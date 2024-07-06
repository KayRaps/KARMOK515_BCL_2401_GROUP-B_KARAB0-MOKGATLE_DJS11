// src/Components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar collapse ${isOpen ? 'active' : ''}`} id="sidebar">
      <button className="sidebar-toggle btn btn-primary" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <Link to="/" onClick={toggleSidebar} className={`sidebar-item ${isOpen ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/search" onClick={toggleSidebar} className={`sidebar-item ${isOpen ? 'active' : ''}`}>
        Search
      </Link>
      <Link to="/favourites" onClick={toggleSidebar} className={`sidebar-item ${isOpen ? 'active' : ''}`}>
        Favourites
      </Link>
      <Link to="/profile" onClick={toggleSidebar} className={`sidebar-item ${isOpen ? 'active' : ''}`}>
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
