import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/moviesSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getMovies(searchQuery));
  };

  return (
    <div id="search">
      <form acceptCharset="utf-8">
        <label htmlFor="search-bar">SEARCH</label>
        <input type="text" name="search bar" placeholder="Search for movies..." id="search-bar" className="blink search-field"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyPress} />
        <button className="search-button" onClick={handleSearch}>GO!</button>
      </form>
    </div>
  );
};

export default SearchBar;