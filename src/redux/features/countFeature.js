import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      state.count = state.count + 1;
    },
    decrement: function (state, action) {
      state.count = state.count - 1;
    },
    incremenrBy: function (state, action) {
      console.log(action);
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incremenrBy } = counterSlice.actions;
export default counterSlice.reducer;
