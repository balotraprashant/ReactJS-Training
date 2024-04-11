import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    // <Link to={`/movies/${movie.id}`} className="block p-4 bg-white rounded shadow-md hover:shadow-lg">
    //   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover mb-4" />
    //   <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
    //   <p className="text-gray-600">{movie.overview}</p>
    // </Link>
    <div className="movie-card">
      <div className="movie-image"> <span className="play"><span className="name">{movie?.titleText?.text}</span></span>
        <a href="#"><img src={movie?.primaryImage?.url} alt={movie?.titleText?.text} /></a>
      </div>
    </div>
  );
};

export default MovieCard;