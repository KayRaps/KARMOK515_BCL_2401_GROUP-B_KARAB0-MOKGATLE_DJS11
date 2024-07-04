import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PodcastCard = ({ podcast, addToFavourites, isFavourite, fetchShowDetails }) => {
  const [showDetails, setShowDetails] = useState(null); // State for show object
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [errorFetchingDetails, setErrorFetchingDetails] = useState(null);

  const handleFetchDetails = async () => {
    setIsLoadingDetails(true);
    setErrorFetchingDetails(null);
    try {
      const response = await axios.get(`https://podcast-api.netlify.app/id/${podcast.id}`);
      setShowDetails(response.data);
    } catch (error) {
      setErrorFetchingDetails('Error fetching show details');
      console.error('Error fetching show details:', error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  useEffect(() => {
    // Call fetchShowDetails if a function is provided (optional)
    if (fetchShowDetails) {
      fetchShowDetails();
    }
  }, [fetchShowDetails]);

  // ... rest of the PodcastCard component logic ...

  if (isLoadingDetails) {
    return <p>Loading show details...</p>;
  }

  if (errorFetchingDetails) {
    return <p>{errorFetchingDetails}</p>;
  }

  if (showDetails) {
    return (
      <div className="podcast-card">
        <img src={podcast.imageUrl} alt={podcast.title} />
        <h3>{podcast.title}</h3>
        <p>{podcast.author}</p>
        <p>{showDetails.description}</p>
        {/* Assuming showDetails contains these properties */}
        <ul>
          <li>Number of Episodes: {showDetails.numEpisodes}</li>
          <li>Genre: {showDetails.genre}</li>
          <li>Host(s): {showDetails.hosts.join(', ')}</li>
        </ul>
        <button onClick={handleFetchDetails}>
          {showDetails ? 'Details' : 'View Details'}
        </button>
      </div>
    );
  }
  

  // Display basic information from the preview object and button
  return (
    <div className="podcast-card">
      <img src={podcast.imageUrl} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{podcast.author}</p>
      <button onClick={handleFetchDetails}>
        <div className="podcast-card">
  {/*... other card content... */}
  {isFavourite? (
    <button onClick={() => addToFavourites(podcast.id)}>Unfavourite</button>
  ) : (
    <button onClick={() => addToFavourites(podcast.id)}>Favourite</button>
  )}
</div>
        {showDetails ? 'Details' : 'View Details'}
      </button>
      {/* ... other card content ... */}
    </div>
  );
};

export default PodcastCard;
