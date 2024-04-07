import React from 'react';
import Products from './product/Product';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the React store!</h1>
      <Products/>
    </div>
  );
};

export default Home;