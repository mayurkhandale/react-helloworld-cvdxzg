import { createSlice } from '@reduxjs/toolkit';
import counterSlice from './features/countFeature';
import employeeSlice from './features/employeeFeature';
const rootReducer = {
  counter: counterSlice,
  employee: employeeSlice,
  
};

export default rootReducer;
