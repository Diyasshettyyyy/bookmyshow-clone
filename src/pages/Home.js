import React from 'react';
import MovieCard from '../components/MovieCard';
import Banner from '../components/Banner';

const movies = [
  { id: 1, title: 'WAR', poster: 'https://m.media-amazon.com/images/M/MV5BMGUzZDIyMmEtZWExZi00OTJmLWI4YWUtZjMwNzcwNjgyYTQwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg', rating: '8.4' },
  { id: 2, title: 'Tamasha', poster: 'https://m.media-amazon.com/images/M/MV5BMzg4NzE4NDMtMGNmOC00MTc1LTk2NTItMmFlMjNjMDgxN2Y5XkEyXkFqcGc@._V1_UY1200_CR99,0,630,1200_AL_.jpg', rating: '8.8' },
  { id: 3, title: 'Two States', poster: 'https://th.bing.com/th/id/OIP.jYUJLXB5WjAQzWYSIo1NBwHaKs?rs=1&pid=ImgDetMain', rating: '9.1' },
  { id: 4, title: 'Raanjhanaa', poster: 'https://th.bing.com/th/id/OIP.EZGGGJROZiZmZBNsNqtTAgHaKt?rs=1&pid=ImgDetMain', rating: '9.6' },
  { id: 5, title: 'Drishyam', poster: 'https://th.bing.com/th/id/OIP.D0ioppNaSqct6oL4bA7n9QAAAA?rs=1&pid=ImgDetMain', rating: '9.1' },
  { id: 6, title: 'Jab We Met', poster: 'https://th.bing.com/th/id/OIP.5mBuRGEl5rXn0Uzki4oOUwHaLH?w=123&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7', rating: '9.1' },
  { id: 7, title: 'Yeh Jaawani Hai Deewani', poster: 'https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg', rating: '9.1' }
];

const Home = () => (
  <div className="container mt-5">
    <h1 className="mb-4">Recommended Movies</h1>
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default Home;
