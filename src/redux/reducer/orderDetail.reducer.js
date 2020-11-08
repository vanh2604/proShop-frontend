import {
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAIL,
} from '../constants/orderConstants';

const initialState = {
  order: {},
  loading: true,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAIL:
      return { ...state, loading: true };
    case GET_ORDER_DETAIL_SUCCESS:
      console.log(action.data);
      return { ...state, loading: false, order: action.data };
    case GET_ORDER_DETAIL_FAIL:
      return { ...state, loading: false, error: action.data };
    default:
      return state;
  }
};
