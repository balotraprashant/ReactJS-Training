import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
  );
};

export default AppRouter;