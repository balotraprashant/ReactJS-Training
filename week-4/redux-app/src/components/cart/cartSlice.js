import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
    },
});

export default cartSlice.reducer;
