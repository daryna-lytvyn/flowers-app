import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import basketData from './basket.json';

export const fetchBasket = createAsyncThunk('basket/fetchAll', async (_, thunkAPI) => {
    return basketData;
});

const initialState = {
    items: [],
    loading: 'idle',
    totalPrice: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, title, price, img, description } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id,
                    quantity: 1,
                    title,
                    price,
                    img,
                    description,
                });
            }

            state.totalPrice += price;

            console.log("Reducer adding item to basket:", {
                id,
                title,
                price,
                img,
                description,
            });
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
                state.totalPrice += existingItem.price;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBasket.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchBasket.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.items = action.payload;
        });
        builder.addCase(fetchBasket.rejected, (state) => {
            state.loading = 'failed';
        });
    },
});

export const { addItem, removeItem } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const statusBasketLoading = (state) => state.basket.loading;
export const selectBasketTotalPrice =(state)=> state.basket.totalPrice;

export default basketSlice.reducer;