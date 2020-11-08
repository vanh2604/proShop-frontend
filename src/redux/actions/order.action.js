import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  GET_ORDER_LIST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAIL,
} from '../constants/orderConstants';
import axios from 'axios';

export const createOrder = ({
  orderItems,
  itemsPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
  paymentMethod,
  shippingAddress,
}) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER });
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(paymentMethod);
    const { data } = await axios.post(
      '/api/orders',
      {
        orderItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        paymentMethod,
        shippingAddress,
      },
      config
    );
    dispatch({ type: CREATE_ORDER_SUCCESS, data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAIL, data: 'create order failed' });
  }
};

export const getOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_DETAIL });
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch({ type: GET_ORDER_DETAIL_SUCCESS, data });
  } catch (error) {
    dispatch({ type: GET_ORDER_DETAIL_FAIL, data: 'GET ORDER DETAIL FAIL' });
  }
};

export const getOrderList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_LIST });
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get('/api/orders/list', config);
    dispatch({ type: GET_ORDER_LIST_SUCCESS, data });
  } catch (error) {
    dispatch({ type: GET_ORDER_LIST_FAIL, data: 'can not get order list' });
  }
};

export const updateOrderGetpaid = (id, paymentResult) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult, config);
    dispatch({ type: ORDER_PAY_SUCCESS, data });
  } catch (error) {
    dispatch({ type: ORDER_PAY_FAIL, data: 'check out failed' });
  }
};
