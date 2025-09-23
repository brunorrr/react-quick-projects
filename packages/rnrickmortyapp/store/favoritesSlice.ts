import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
};


type FavoritesState = {
    items: Record<string, Character>; // indexado por id
};


const initialState: FavoritesState = { items: {} };


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<Character>) {
            const c = action.payload;
            if (state.items[c.id]) {
                delete state.items[c.id];
            } else {
                state.items[c.id] = c;
            }
        },
        removeFavorite(state, action: PayloadAction<string>) {
            delete state.items[action.payload];
        },
    },
});


export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;