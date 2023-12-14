import { createSlice } from '@reduxjs/toolkit';
import jsonDatas from './bouquets.json'; 

const initialState = {
    jsonData: jsonDatas,
};

const bouquetsSlice = createSlice({
  name: 'bouquets',
  initialState: initialState,
  reducers: {
    updateBouquets(state, action) {
        console.log(action.payload);
       state.jsonData = action.payload;
    },
  },
});

export const { updateBouquets } = bouquetsSlice.actions;
export default bouquetsSlice.reducer;