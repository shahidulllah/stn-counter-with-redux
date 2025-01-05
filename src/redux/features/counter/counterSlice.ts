import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    deccrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, deccrement } = counterSlice.actions;

export default counterSlice.reducer;
