import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";;

const initialState = {
  products: [],
  productsByDiscount: [],
  productsByCategory: [],
  categoryTitle: '',
  loading: false,
  error: null,
  product: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
    
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/products/all`
      );

      if (!response.ok) {
        throw new Error("Products not Found !!!");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (categoryId) => {
    try {
      
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/categories/${categoryId}`
      );
      if (!response.ok) {
        throw new Error("Category products not found");
      }
      const data = await response.json();
      return {
        title: data.category.title,
        products: data.data
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (productId) => {
    try {
      
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/products/${productId}`
      );

      if (!response.ok) {
        throw new Error("Product not Found !!!");
      }

      const data = await response.json();
      return Array.isArray(data) ? data[0] : data;
      
    } catch (error) {
      return error.message;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
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
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.productsByCategory = action.payload.products;
        state.categoryTitle = action.payload.title;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
