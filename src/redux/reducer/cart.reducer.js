import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartContants';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
  paymentMethod: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.data;
      const existItemIndex = state.cartItems.findIndex((i) => i.id === item.id);
      if (existItemIndex !== -1) {
        const newCartItems = [...state.cartItems];
        newCartItems[existItemIndex] = item;
        return { ...state, cartItems: newCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }
    case REMOVE_FROM_CART: {
      const newCartItems = state.cartItems.filter((item) => item.id !== action.id);
      return { ...state, cartItems: newCartItems };
    }
    case SAVE_SHIPPING_ADDRESS: {
      return { ...state, shippingAddress: action.data };
    }
    case SAVE_PAYMENT_METHOD: {
      return { ...state, paymentMethod: action.data };
    }
    default:
      return state;
  }
};
