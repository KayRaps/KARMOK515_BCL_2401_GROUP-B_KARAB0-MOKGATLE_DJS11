// src/Contexts/FavouritesContext.js
import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (podcast) => {
    setFavourites([...favourites, podcast]);
  };

  const removeFavourite = (podcast) => {
    setFavourites(favourites.filter(fav => fav.id !== podcast.id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
