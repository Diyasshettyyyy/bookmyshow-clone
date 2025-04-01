import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



const MovieBookingModal = ({ show, handleClose, movie }) => {
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(1);
  const [date, setDate] = useState('');

  const handleConfirmBooking = () => {
    alert(`Booking Confirmed! 🎟️\nMovie: ${movie.title}\nName: ${name}\nSeats: ${seats}\nDate: ${date}`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Tickets for {movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Number of Seats:</Form.Label>
            <Form.Control type="number" value={seats} onChange={(e) => setSeats(e.target.value)} min="1" max="10" required />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Date:</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="danger" onClick={handleConfirmBooking} disabled={!name || !date}>
          Confirm Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieBookingModal;
