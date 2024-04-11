import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AppRouter from './AppRouter';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
