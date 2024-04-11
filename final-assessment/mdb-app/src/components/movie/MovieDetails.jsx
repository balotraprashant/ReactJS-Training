import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = ({ match }) => {
  const movieId = match.params.id;
  const movie = useSelector((state) => state.movies.entities.find((m) => m.id === parseInt(movieId, 10)));

  if (!movie) {
    return <div>Loading...</div>;
  }

  //...
};

export default MovieDetails;