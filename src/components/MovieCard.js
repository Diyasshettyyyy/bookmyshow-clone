import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h5>{movie.title}</h5>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
