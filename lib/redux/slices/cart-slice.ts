import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/app/api/products/types';

const cartSlice = createSlice<
  Product[],
  {
    add: (state: Product[], action: { payload: Product }) => void;
    remove: (state: Product[], action: { payload: number }) => Product[];
  },
  'cart'
>({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
