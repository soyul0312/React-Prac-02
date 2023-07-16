import { createSlice } from "@reduxjs/toolkit";

// 초기 장바구니에는 초기값이 필요없기 때문에 빈 배열로 설정.
const 장바구니 = createSlice({
  name: "장바구니",
  initialState: [],
});
