import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeFromCart(state, action) {
      const itemId = action.payload.id;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     cartItems: [],
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItemToCart(state, action) {
//             const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 state.cartItems.push({ ...action.payload, quantity: 1 });
//             }
//         },
//         removeItemFromCart(state, action) {
//             state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export default cartSlice;
