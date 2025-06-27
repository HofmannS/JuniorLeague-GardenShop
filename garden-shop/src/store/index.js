import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../store/features/categoriesSlice';


const store = configureStore({
    reducer: {
         categories: categoriesReducer,
        // products: productsReducer,
    },
});

export default store;