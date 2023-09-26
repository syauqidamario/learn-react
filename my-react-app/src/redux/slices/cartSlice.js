import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        try {
          const parsedData = JSON.parse(cartData);
          state.data = parsedData;
        } catch (error) {
          console.error("Error parsing cart data:", error);
        }
      }

      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }

      // After modifying the cart data, update it in localStorage
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
