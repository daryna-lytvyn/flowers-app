import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basketItems: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action) {
            state.basketItems.push(action.payload);
        },
        removeFromBasket(state, action) {
            state.basketItems = state.basketItems.filter(
                (_, index) => index !== action.payload.index
            );
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;