
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';


const App = () => (
  <Router>
    <Navbar />
    <Banner />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
