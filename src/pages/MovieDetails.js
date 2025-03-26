import React from 'react';
import { useParams } from 'react-router-dom';

const movies = [
  { id: 1, title: 'WAR', poster: 'https://m.media-amazon.com/images/M/MV5BMGUzZDIyMmEtZWExZi00OTJmLWI4YWUtZjMwNzcwNjgyYTQwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg', rating: '8.4' },
  { id: 2, title: 'Tamasha', poster: 'https://th.bing.com/th/id/OIP.MKPr5E_t4tEOocLVecfHnQHaF7?w=2000&h=1600&rs=1&pid=ImgDetMain', rating: '8.8' },
  { id: 3, title: 'Two States', poster: 'https://th.bing.com/th/id/OIP.jYUJLXB5WjAQzWYSIo1NBwHaKs?rs=1&pid=ImgDetMain', rating: '9.1' },
  { id: 4, title: 'Raanjhanaa', poster: 'https://th.bing.com/th/id/OIP.EZGGGJROZiZmZBNsNqtTAgHaKt?rs=1&pid=ImgDetMain', rating: '9.6' },
  { id: 5, title: 'Drishyam', poster: 'https://th.bing.com/th/id/OIP.D0ioppNaSqct6oL4bA7n9QAAAA?rs=1&pid=ImgDetMain', rating: '9.1' },
  { id: 6, title: 'Jab We Met', poster: 'https://th.bing.com/th/id/OIP.5mBuRGEl5rXn0Uzki4oOUwHaLH?w=123&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7', rating: '9.1' },
  { id: 7, title: 'Yeh Jaawani Hai Deewani', poster: 'https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg', rating: '9.1' },
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  
  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="container mt-5">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} className="img-fluid my-4" />
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
