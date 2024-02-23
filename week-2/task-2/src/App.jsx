import React from 'react';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Header />
                <CartProvider>
                    <AppRouter />
                </CartProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;