import axios from 'axios';
import { LOGIN_SUCCESS } from '../constants/userLoginConstant.js';
import {
  START_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/userRegister.js';

export const register = ({ name, email, password }) => async (dispatch) => {
  dispatch({ type: START_REGISTER });
  try {
    const { data } = await axios.post('/api/users/signup', { name, email, password });
    dispatch({ type: REGISTER_SUCCESS, data });
    dispatch({ type: LOGIN_SUCCESS, data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: 'user exist' });
  }
};
