import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === product.id);

      if (itemIndex === -1) {
        state.items.push({ ...product, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }

      state.total += product.price;
      
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        const itemToRemove = state.items[itemIndex];
        state.total -= itemToRemove.price * itemToRemove.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === productId);

      if (itemIndex !== -1) {
        const itemToUpdate = state.items[itemIndex];
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1;
          state.total -= itemToUpdate.price;
        } else {
          state.total -= itemToUpdate.price;
          state.items.splice(itemIndex, 1);
        }
      }
    },
    setCart:(state, action) =>{
        return action.payload;
    }
  },
});

export const { addToCart, removeFromCart, decrementQuantity, setCart } = cartSlice.actions;
export default cartSlice.reducer;
