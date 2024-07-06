// src/Pages/Favourites.js
import React, { useContext } from 'react';
import { FavouritesContext } from '../Contexts/FavouritesContext';
import PodcastCard from '../Components/PodcastCard';
import '../Styles/main.css';

const Favourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="display-podcast">
      <h1>Your Favourites</h1>
      <div className="podcast-grid">
        {favourites.map(podcast => (
          <PodcastCard
            key={podcast.id}
            id={podcast.id}
            title={podcast.title}
            description={podcast.description}
            imageUrl={podcast.imageUrl}
            audioUrl={podcast.audioUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
