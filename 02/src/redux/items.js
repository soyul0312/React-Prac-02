import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    name: "멋진 바지",
    price: 20000,
    options: ["28", "30", "32"],
    likes: 100,
  },
  {
    id: nanoid(),
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    id: nanoid(),
    name: "멋진 신발",
    price: 30000,
    options: ["230", "240", "250", "260", "270"],
    likes: 300,
  },
];

const items = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    sortByPrice: (state) => {
      state.sort((a, b) => a.price - b.price);
    },
    resetPrice: () => {
      return initialState;
    },
  },
});

export const { sortByPrice, resetPrice } = items.actions;
export default items;
