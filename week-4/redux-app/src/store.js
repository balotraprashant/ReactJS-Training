import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './components/product/product.reducer';
import cartSlice from './components/cart/cartSlice';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartSlice,
});

const store = configureStore(
    {reducer: rootReducer}
);

export default store;
