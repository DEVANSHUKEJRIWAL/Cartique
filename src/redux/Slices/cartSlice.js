// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Add item to the cart
      return [...state, action.payload];
    },
    remove: (state, action) => {
      // Remove item from the cart
      return state.filter(item => item.id !== action.payload);
    },
    clearCart: () => {
      // Clear the entire cart
      return [];
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
