import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodcastCard from '../Components/PodcastCard';

const DisplayPodcast = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://podcast-api.netlify.app');
      setPodcasts(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="display-podcast">
      <h1>Podcasts</h1>
      <div className="podcast-grid">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default DisplayPodcast;
