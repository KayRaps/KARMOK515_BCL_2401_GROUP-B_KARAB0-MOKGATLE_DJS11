import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodcastCard from '../Components/PodcastCard'; // Assuming PodcastCard is in a sibling directory
import '../App.css';


const genres = [
  { id: 1, title: 'Personal Growth' },
  { id: 2, title: 'Investigative Journalism' },
  { id: 3, title: 'History' },
  { id: 4, title: 'Comedy' },
  { id: 5, title: 'Entertainment' },
  { id: 6, title: 'Business' },
  { id: 7, title: 'Fiction' },
  { id: 8, title: 'News' },
  { id: 9, title: 'Kids & Family' }, // Use "&" instead of "and" for better display
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('asc'); // State for sorting order
  const [selectedGenre, setSelectedGenre] = useState('all'); // State for selected genre

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://podcast-api.netlify.app');
        setPodcasts(response.data);
      } catch (error) {
        setError('Error fetching podcasts');
        console.error('Error fetching podcasts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredPodcasts = podcasts.filter((podcast) => {
    // Filter by search term (title or author)
    const titleLower = podcast.title.toLowerCase();
    const authorLower = podcast.author?.toLowerCase();
    const searchMatch =
      titleLower.includes(searchTerm) || (authorLower && authorLower.includes(searchTerm));

    // Filter by genre (if selectedGenre is not "all")
    const genreMatch = selectedGenre === 'all' || podcast.genre === selectedGenre;

    return searchMatch && genreMatch;
  });

  const sortedPodcasts = sortBy === 'asc'
    ? filteredPodcasts.sort((a, b) => a.title.localeCompare(b.title))
    : filteredPodcasts.sort((a, b) => b.title.localeCompare(a.title)); // Z-A

  return (
    <div className="search">
      <h1>Search Podcasts</h1>
      <div className="search-controls">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or author"
        />
        <select value={sortBy} onChange={handleSortChange}>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="all">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="podcast-grid">
        {loading ? (
          <p>Loading podcasts...</p>
        ) : error ? (
          <p>{error}</p>
        ) : sortedPodcasts.length ? (
          sortedPodcasts.map((podcast) => (
            <div key={podcast.id}>
              <PodcastCard podcast={podcast} />
              <h2>{podcast.title}</h2>
              <p>{podcast.author}</p>
            </div>
          ))
        ) : (
          <p>No podcasts found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
