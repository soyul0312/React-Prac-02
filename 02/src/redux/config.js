import { configureStore } from "@reduxjs/toolkit";
import items from "./items";

const store = configureStore({
  reducer: {
    products: items.reducer,
  },
});

export default store;
