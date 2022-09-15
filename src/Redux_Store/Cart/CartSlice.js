import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    totalQuantity: 0,
    cartTotal: 0,
    items: [],
  },
  reducers: {
    bulkAdd(state, action) {
      const { id, qty } = action.payload;
    },
    deleteItem(state, action) {
      console.log("state.items:", current(state.items));

      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.items = state.items.filter((item) => item.id !== newItem.id);

      console.log("existingItem:", current(existingItem));
      state.cartTotal = state.cartTotal - existingItem.totalPrice;
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.cartTotal += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.img,
          quantity: 1,
          description: newItem.description,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      let qty = action.payload?.qty;
      console.log("qty:", qty);

      const existingItem = state.items.find((item) => item.id === id);
      state.cartTotal -= existingItem.price;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
