import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '@features/categoriesSlice';
import productsReducer from '@features/productSlice';
import favoritesReducer from '@features/favoriteSlice';
import cartReducer from '@features/cartSlice';


const store = configureStore({
    reducer: {
         categories: categoriesReducer,
         products: productsReducer,
         cart: cartReducer,
         favorites: favoritesReducer,
    },
});

export default store;