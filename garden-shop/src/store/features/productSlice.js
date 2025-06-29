import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
    products: [],
    productsByDiscount: [],
    loading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/products/all`);
             
            if (!response.ok) {
                throw new Error("Products not Found !!!");
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return error.message;
        }
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchProducts.pending, state => {
            state.loading = true;
        }) 
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        }) 
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default productsSlice.reducer;