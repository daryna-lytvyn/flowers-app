import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bouquetsData from './bouquets.json';

export const fetchBouquets = createAsyncThunk('bouquets/fetchAll', async (_, thunkAPI) => {
  return bouquetsData;
});

const initialState = {
  items: [],
  loading: 'idle'
};

const bouquetsSlice = createSlice({
  name: 'bouquets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBouquets.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchBouquets.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.items = action.payload;
    });
    builder.addCase(fetchBouquets.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const selectBouquets = (state) => state.bouquets.items;
export const statusBouquetsLoading = (state) => state.bouquets.loading;

export default bouquetsSlice.reducer;
