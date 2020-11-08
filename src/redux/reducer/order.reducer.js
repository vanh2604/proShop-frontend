import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from '../constants/orderConstants';
const initialState = {
  order: {},
  loading: false,
  success: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...state, loading: true };
    }
    case CREATE_ORDER_SUCCESS: {
      return { ...state, loading: false, success: true, order: action.data };
    }
    case CREATE_ORDER_FAIL: {
      return { ...state, loading: false, error: action.data };
    }
    default:
      return state;
  }
};
