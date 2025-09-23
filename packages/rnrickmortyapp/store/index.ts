import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import favorites from './favoritesSlice';


export const store = configureStore({
    reducer: { favorites },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;