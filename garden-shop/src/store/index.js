import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '@store/features/categoriesSlice';
import productsReducer from '@store/features/productSlice';
import favoritesReducer from '@store/features/favoriteSlice';
import cartReducer from '@store/features/cartSlice';


const store = configureStore({
    reducer: {
         categories: categoriesReducer,
         products: productsReducer,
         cart: cartReducer,
         favorites: favoritesReducer,
    },
});

export default store;