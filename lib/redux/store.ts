import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice';
import productReducer from './slices/product-slice';
import { middleware } from '@/lib/redux/middleware';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

export default store;
