import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchMovies = createAsyncThunk('search/movie',
  async (query) => {

    // const options = {
    //   method: 'GET',
    //   url: 'https://api.themoviedb.org/3/search/movie',
    //   params: {
    //     query: query,
    //     api_key: process.env.REACT_APP_TMDB_API_KEY
    //   }
    // };

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/v2/search',
      params: {
        searchTerm: query,
        type: 'MOVIE',
        first: '10'
      },
      headers: {
        'X-RapidAPI-Key': 'b23d64856cmsh3884b5697cdd805p10bf93jsn7c94c9d8caf4',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchPopular = createAsyncThunk('movie/fetchPopular',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/v2/get-popular',
      params: { first: '12' },
      headers: {
        'X-RapidAPI-Key': 'b23d64856cmsh3884b5697cdd805p10bf93jsn7c94c9d8caf4',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    try {
      // const response = await axios.request(options);
      // console.log(response.data);
      // return response.data;

      const data = require('../../popularMovies.json');
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);