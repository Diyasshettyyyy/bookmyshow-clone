import React, { useState } from 'react';
import '../pages/Booking.css';

const seats = Array.from({ length: 30 }, (_, i) => i + 1); // Total 30 seats

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    alert(`You have booked seats: ${selectedSeats.join(', ')}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Book Your Seats</h2>
      <div className="seat-container">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button className="btn btn-danger mt-4" onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
