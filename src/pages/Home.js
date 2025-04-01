
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

const comedyShows = [
  { id: 1, title: 'The Hangover', poster: 'https://th.bing.com/th/id/OIP.ryuXtblZ4H2EC11gKrmcSwHaHa?rs=1&pid=ImgDetMain', rating: '8.5' },
  { id: 2, title: 'Superbad', poster: 'https://th.bing.com/th/id/OIP.-HhmrdGnD1rg_D89JMqgsgHaK4?rs=1&pid=ImgDetMain', rating: '8.9' },
  { id: 3, title: 'Dumb and Dumber', poster: 'https://th.bing.com/th/id/OIP.mkKIWCylZ5s50TJGTheA7QHaLG?rs=1&pid=ImgDetMain', rating: '8.2' },
  { id: 4, title: 'The Kapil Sharma Show', poster: 'https://th.bing.com/th/id/OIP.8nG_xeJ-8sZX7u_M95nviQHaKk?rs=1&pid=ImgDetMain', rating: '9.5' },
  { id: 5, title: 'Comedy Night', poster: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/comedy-night-flyer-template-4e966b63965a146547c03c62354a5eb3_screen.jpg?ts=1508175633', rating: '9.5' },
  { id: 6, title: 'Unfiltered', poster: 'https://cdn2.stayhappening.com/thumbs/thumb6752869895fd7.jpg', rating: '9.5' },
  { id: 7, title: 'Zakir Khan ', poster: 'https://www.hire4event.com/blogs/wp-content/uploads/2024/09/Best-Standup-Comedian-for-Corporate-Events-in-Delhi.jpg', rating: '9.5' },
  { id: 8, title: 'Laughter', poster: 'https://img.freepik.com/premium-psd/stand-up-comedy-event-poster-with-shades-red-color_69464-3612.jpg', rating: '9.5' },
];

const actionMovies = [
  { id: 1, title: 'John Wick', poster: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY679_.jpg', rating: '9.0' },
  { id: 2, title: 'Mad Max: Fury Road', poster: 'https://m.media-amazon.com/images/I/91ljNw0YVnL._AC_SY679_.jpg', rating: '8.9' },
];

const Home = () => (
  <div className="container mt-5">
    <h1 className="mb-4">Recommended Movies</h1>
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>

    <h1 className="mt-5 mb-4">Comedy Shows</h1>
    <div className="movie-list-container">
      {comedyShows.map((show) => (
        <MovieCard key={show.id} movie={show} />
      ))}
    </div>
  </div>
);


export default Home;
