import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './Basket/basketSlice';
import bouquetsSlice from './Bouquets/bouquetsSlice';

const basketReducer = basketSlice.reducer;
const bouquetsReducer = bouquetsSlice.reducer;

const rootReducer = {
  basket: basketReducer,
  bouquets: bouquetsReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;