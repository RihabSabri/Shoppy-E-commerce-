import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state, action) {
      const nextCartItems = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.quantity -= 1;
      state.products = nextCartItems;
      state.total -= action.payload.price * action.payload.quantity;
      return state;
    },
  },
});

export const { addProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
