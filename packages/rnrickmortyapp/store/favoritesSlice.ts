import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
    items: Record<number>;
};

const initialState: FavoritesState = { items: [] };

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<number>) {
            state.items.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<number>) {
            state.items = state.items.filter(id => id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;