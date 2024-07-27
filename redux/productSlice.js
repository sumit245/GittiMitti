// redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],  // Changed from 'products' to 'list' to match useSelector
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload; // Changed from 'state.products' to 'state.list'
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
});

export const { setProducts, selectProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
