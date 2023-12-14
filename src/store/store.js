import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './Basket/basketSlice';
import bouquetsSlice  from './Bouquets/bouquetsSlice';

const rootReducer = {
  basket: basketSlice,
  bouquets: bouquetsSlice 
};

const store = configureStore({
  reducer: rootReducer
});

export default store;