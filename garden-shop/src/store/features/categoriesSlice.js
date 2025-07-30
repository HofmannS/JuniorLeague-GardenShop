import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
    categories: [],
    loading: false,
    error: null,
}

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (_, { rejectWithValue }) => {
        try {
            
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/categories/all`);
             
            if (!response.ok) {
                throw new Error("Categories not Found !!!");
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchCategories.pending, state => {
            state.loading = true;
        }) 
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        }) 
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default categoriesSlice.reducer;