import { createSlice } from '@reduxjs/toolkit';
import { fetchPopular, searchMovies } from '../lib/api/mdb-api';

const initialState = {
  entities: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    resetSearchData(state) {
      state.entities = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload.data.mainSearch.edges;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload.data;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Define the action type for the getMovies action creator
const type = 'search/movies';

// Define the getMovies action creator
export const getMovies = (query) => async (dispatch) => {
  try {
    dispatch({ type: type, payload: { status: 'loading' } });
    const movies = await dispatch(searchMovies(query));
    dispatch({ type: type, payload: { status: 'succeeded', data: movies } });
  } catch (error) {
    dispatch({ type: type, payload: { status: 'failed', error: error.message } });
  }
};

const popularType = 'movie/fetchPopular';

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    dispatch({ type: popularType, payload: { status: 'loading' } });
    const data = await dispatch(fetchPopular());
    dispatch({ type: popularType, payload: { status: 'succeeded', data: data } });
  } catch (error) {
    dispatch({ type: popularType, payload: { status: 'failed', error: error.message } });
  }
};

export const resetSearchData = () => ({
  type: 'searchResults/resetSearchData',
});

export default moviesSlice.reducer;