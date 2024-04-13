import { configureStore } from '@reduxjs/toolkit';
import moviesSlice, { popularMoviesSlice } from './moviesSlice';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        searchResults: moviesSlice,
        popularMovies: popularMoviesSlice.reducer,
        auth: authSlice
    },
});

export default store;

