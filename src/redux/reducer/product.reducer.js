import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  START_FETCHING_PRODUCT,
} from '../constants/fetchProductConstant';

const initialState = {
  productLists: [],
  productDetail: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_PRODUCT: {
      state.isLoading = true;
      return { ...state };
    }
    case GET_PRODUCT_LIST: {
      return { ...state, productLists: action.data, isLoading: false };
    }
    case GET_PRODUCT_DETAIL: {
      return { ...state, productDetail: action.data, isLoading: false };
    }
    default:
      return { ...state };
  }
};
