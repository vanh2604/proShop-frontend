import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from '../constants/userLoginConstant';

const initialState = {
  loading: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.data };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error };
    case USER_LOGOUT:
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
