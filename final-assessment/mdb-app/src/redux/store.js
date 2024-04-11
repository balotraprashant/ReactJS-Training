import { configureStore } from '@reduxjs/toolkit';
import moviesSlice, { popularMoviesSlice } from './moviesSlice';

const store = configureStore({
    reducer: {
        searchResults: moviesSlice,
        popularMovies: popularMoviesSlice.reducer
    },
});

export default store;

