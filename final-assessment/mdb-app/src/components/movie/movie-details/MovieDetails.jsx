import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ match }) => {
  const { movieId } = useParams();

  // Fetch movie details using movieId
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {

    const url = 'https://imdb8.p.rapidapi.com/title/v2/get-details?tconst=';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b23d64856cmsh3884b5697cdd805p10bf93jsn7c94c9d8caf4',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }

    // Fetch movie details using movieId from API or data source
    fetch(url+`${movieId}`, options)
      .then(response => response.json())
      .then(data => setMovieDetails(data.data.title))
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div class="movie-details-container">
      <img src={movieDetails?.primaryImage?.url} alt="Movie Poster" class="movie-poster" />
      <div class="movie-info">
        <h1>{movieDetails?.titleText?.text}</h1>
        <p class="release-date">Release Date: {movieDetails?.releaseDate.year}-{movieDetails?.releaseDate.month}-{movieDetails?.releaseDate.day}</p>
        <p class="genre">Genre: Action, Adventure</p>
        <p class="synopsis">Movie synopsis goes here...</p>
      </div>
    </div>
  )
};

export default MovieDetails;