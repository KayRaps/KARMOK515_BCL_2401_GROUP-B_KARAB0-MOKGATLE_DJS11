import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  return (
    <div className={`sidebar collapse ${isOpen ? 'active' : ''}`} id="sidebar">  {/* Add CSS class for styling */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <button className="sidebar-toggle btn btn-primary" onClick={toggleSidebar}/>
        <i className="fas fa-bars"></i> {/* Replace with your toggle icon */}
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
