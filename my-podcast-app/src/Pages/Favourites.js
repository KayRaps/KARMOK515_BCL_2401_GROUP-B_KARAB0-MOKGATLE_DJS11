import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get('/api/favourites'); // Adjust the API endpoint as needed
        setFavourites(response.data);
      } catch (error) {
        setError('Error fetching favourite podcasts');
        console.error('Error fetching favourite podcasts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavourites();
  }, []);

  const handleRemoveFavourite = async (podcastId) => {
    try {
      await axios.delete(`/api/favourites/${podcastId}`); // Adjust the API endpoint as needed
      setFavourites(favourites.filter((podcast) => podcast.id !== podcastId));
    } catch (error) {
      setError('Error removing favourite podcast');
      console.error('Error removing favourite podcast:', error);
    }
  };

  if (loading) {
    return <p>Loading favourite podcasts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="favourites">
      <h1>Favourite Podcasts</h1>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((podcast) => (
            <li key={podcast.id}>
              <h2>{podcast.title}</h2>
              <p>{podcast.author}</p>
              <button onClick={() => handleRemoveFavourite(podcast.id)}>Remove from Favourites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite podcasts found.</p>
      )}
    </div>
  );
};

export default Favourites;
