import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  tech: 'JavaScript',
  framework: 'React JS',
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState:  initialState,
  reducers: {
    techChange: function (state, action) {
      console.log(state)
     state.tech="React Js"
    },
  },
});
 export const  {techChange}= employeeSlice.actions
export default employeeSlice.reducer