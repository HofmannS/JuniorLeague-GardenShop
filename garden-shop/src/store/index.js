import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../store/features/categoriesSlice';
import productsReducer from '../store/features/productSlice';


const store = configureStore({
    reducer: {
         categories: categoriesReducer,
         products: productsReducer,
    },
});

export default store;