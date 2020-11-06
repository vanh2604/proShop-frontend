import {
  START_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/userRegister';

const initialState = {
  loading: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_REGISTER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.data };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
