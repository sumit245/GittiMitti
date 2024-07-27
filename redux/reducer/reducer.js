import { SET_PRODUCTS, SELECT_PRODUCT, CLEAR_SELECTED_PRODUCT } from '../actions/actions';

const initialState = {
  products: [],
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case CLEAR_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

export default productReducer;
