import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Product } from '@/app/api/products/types';

export const PRODUCTS_SLICE_STATES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  FAILED: 'failed',
});

const initialState: CounterSliceState = {
  value: [],
  status: PRODUCTS_SLICE_STATES.IDLE,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = PRODUCTS_SLICE_STATES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = PRODUCTS_SLICE_STATES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = PRODUCTS_SLICE_STATES.FAILED;
      });
  },
});

/* Types */
export interface CounterSliceState {
  value: Product[];
  status: 'idle' | 'loading' | 'failed';
}

// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (page: number) => {
    const url = new URL('http://localhost:3000/api/products');

    url.searchParams.set('page', page.toString());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    return await response.json();
  },
);
