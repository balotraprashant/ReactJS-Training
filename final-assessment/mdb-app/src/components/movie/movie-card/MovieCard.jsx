import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-image"> <span className="play"><span className="name">{movie?.titleText?.text}</span></span>
        <Link to={`/movies/${movie?.id}`}> {/* Dynamic route with movie ID */}
          <img src={movie?.primaryImage?.url} alt={movie?.titleText?.text} />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;