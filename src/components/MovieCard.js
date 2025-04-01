// import React, { useState } from 'react';
import './MovieCard.css';
import MovieBookingModal from './MovieBookingModal'; // Import the booking modal
import React, { useState } from 'react';


const MovieCard = ({ movie }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <div className="movie-card" onClick={() => setShowBooking(true)}>
        <img src={movie.poster} alt={movie.title} className="movie-image" />
        <h5>{movie.title}</h5>
        <p>⭐ {movie.rating}</p>
      </div>

      {/* Booking Popup */}
      <MovieBookingModal
        show={showBooking}
        handleClose={() => setShowBooking(false)}
        movie={movie}
      />
    </>
  );
};

export default MovieCard;
