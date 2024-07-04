import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import DisplayPodcast from './Pages/DisplayPodcast';
import Search from './Pages/Search';
import Favourites from './Pages/Favourites'; // Assuming you have a Favourites component
import Profile from './Pages/Profile';
import Sidebar from './Components/SideBar'; // Import the Sidebar component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar /> {/* Sidebar component */}
        <div className="main-content">
          <Navbar /> {/* Navbar component */}
          <Routes>
            <Route path="/" element={<DisplayPodcast />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add more routes for other pages as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
