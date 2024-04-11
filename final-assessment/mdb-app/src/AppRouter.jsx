import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import MovieDetail from './components/movie/movie-details/MovieDetails';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} /> {/* Route for MovieDetail */}
    </Routes>
  );
};

export default AppRouter;