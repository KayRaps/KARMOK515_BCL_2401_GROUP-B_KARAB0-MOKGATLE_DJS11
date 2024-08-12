import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import DisplayPodcast from './Pages/DisplayPodcast';
import Search from './Pages/Search';
import Favourites from './Pages/Favourites';
import Profile from './Pages/Profile';
import { FavouritesProvider } from './Contexts/FavouritesContext';
import { AuthProvider } from './Contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.css';
import './App.css';

const App = () => (
  <AuthProvider>
    <FavouritesProvider>
      <BrowserRouter>
        <div className="app">
          <div className="main-content">
            <Navbar />
            <header>Welcome to Pod-Kast</header>
            <Routes>
              <Route path="/" element={<DisplayPodcast />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </FavouritesProvider>
  </AuthProvider>
);

export default App;
