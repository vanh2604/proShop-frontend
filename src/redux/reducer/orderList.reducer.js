import {
  GET_ORDER_LIST,
  GET_ORDER_LIST_FAIL,
  GET_ORDER_LIST_RESET,
  GET_ORDER_LIST_SUCCESS,
} from '../constants/orderConstants';

const initialState = {
  myOrders: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_LIST:
      return { ...state, loading: true };
    case GET_ORDER_LIST_SUCCESS:
      return { ...state, loading: false, myOrders: action.data };
    case GET_ORDER_LIST_FAIL: {
      return { ...state, error: action.data };
    }
    case GET_ORDER_LIST_RESET:
      return { ...state, myOrders: [], loading: false, error: '' };
    default:
      return state;
  }
};
