import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import MovieDetail from './components/movie/movie-details/MovieDetails';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} /> {/* Route for MovieDetail */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRouter;