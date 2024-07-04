import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await axios.get(`https://podcast-api.netlify.app/podcasts/${podcastId}`);
        setPodcast(response.data);
      } catch (error) {
        setError('Error fetching podcast details');
        console.error('Error fetching podcast details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcastDetails();
  }, [podcastId]);

  if (loading) {
    return <p>Loading podcast details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!podcast) {
    return <p>No podcast found.</p>;
  }

  return (
    <div className="podcast-details">
      <h1>{podcast.title}</h1>
      <p>{podcast.description}</p>
      <p>Author: {podcast.author}</p>
      <p>Release Date: {new Date(podcast.releaseDate).toLocaleDateString()}</p>
      <div>
        <h2>Episodes</h2>
        {podcast.episodes.length > 0 ? (
          <ul>
            {podcast.episodes.map((episode) => (
              <li key={episode.id}>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <p>Duration: {episode.duration} minutes</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No episodes available.</p>
        )}
      </div>
    </div>
  );
};

export default PodcastDetails;
