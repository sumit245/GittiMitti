// Define action types
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';

// Action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export const clearSelectedProduct = () => ({
  type: CLEAR_SELECTED_PRODUCT,
});
