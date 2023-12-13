import { createSlice } from '@reduxjs/toolkit';
import jsonData from './bouquets.json'; 

const bouquetsSlice = createSlice({
  name: 'bouquets',
  initialState: {
    jsonData: jsonData,
  },
  reducers: {
    updateBouquets(state, action) {
      state.jsonData = action.payload;
    },
  },
});

export const { updateBouquets } = bouquetsSlice.actions;
export default bouquetsSlice.reducer;