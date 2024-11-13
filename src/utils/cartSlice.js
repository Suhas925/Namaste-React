import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      // we are directly mutating the state here.
      state.items.push(action.payload);
    },
    removeLastItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

export const {addItems, removeLastItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

/*
const cartSlice = {
  actions: {addItems, removeLastItem, clearCart},
  reducer
};
*/