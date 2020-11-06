import axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartContants';

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: ADD_TO_CART,
      data: {
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        countInStock: data.countInStock,
        qty,
      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
  };
};

export const removeCartItem = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, id: id });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
  };
};

export const saveShippingAddress = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: SAVE_SHIPPING_ADDRESS, data });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify(getState().cartReducer.shippingAddress)
    );
  };
};

export const savePaymentMethod = (data) => {
  return (dispatch) => {
    dispatch({ type: SAVE_PAYMENT_METHOD, data });
  };
};
