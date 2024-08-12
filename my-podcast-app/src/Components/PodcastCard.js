import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { FavouritesContext } from '../Contexts/FavouritesContext';
import '../Styles/main.css';

const PodcastCard = ({ id, title, description, imageUrl, audioUrl }) => {
  const { addFavourite, removeFavourite, favourites } = useContext(FavouritesContext);

  const isFavourite = favourites.some(fav => fav.id === id);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(id);
    } else {
      addFavourite({ id, title, description, imageUrl, audioUrl });
    }
  };

  return (
    <div className="podcast-card">
      {imageUrl && <img src={imageUrl} alt={`${title} cover`} className="podcast-image" />}
      <div className="podcast-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ReactAudioPlayer
          src={audioUrl}
          controls
          className="audio-player"
        />
        <i className={`fas fa-heart play-icon ${isFavourite ? 'favourite' : ''}`} onClick={toggleFavourite}></i>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  audioUrl: PropTypes.string.isRequired,
};

PodcastCard.defaultProps = {
  imageUrl: '', // Provide a default value
};

export default PodcastCard;
