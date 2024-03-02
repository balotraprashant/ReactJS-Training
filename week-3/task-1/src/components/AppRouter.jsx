import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Products from './products/Products';
import Cart from './cart/Cart';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRouter;