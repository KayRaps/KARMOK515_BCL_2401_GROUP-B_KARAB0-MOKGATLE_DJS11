import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastCard from "../Components/PodcastCard";
import "../Styles/main.css";

const DisplayPodcast = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get("https://podcast-api.netlify.app");
      setPodcasts(response.data);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="display-podcast">
      <div className="podcast-grid">
        {podcasts.map((podcast) => (
          <PodcastCard
            id={podcast.id}
            audioUrl={podcast.audio}
            key={podcast.id}
            title={podcast.title}
            description={podcast.description}
            imageUrl={podcast.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayPodcast;
