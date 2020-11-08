import axios from 'axios';
import { GET_ORDER_LIST_RESET } from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants';
import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from '../constants/userLoginConstant';

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: START_LOGIN });
  try {
    const { data } = await axios.post('/api/users/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: 'email or password are wrong' });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('shippingAddress');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: GET_ORDER_LIST_RESET });
  dispatch({ type: USER_DETAILS_RESET });
};
