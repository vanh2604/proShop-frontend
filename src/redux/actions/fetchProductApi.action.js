import Axios from 'axios';
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  START_FETCHING_PRODUCT,
} from '../constants/fetchProductConstant';

export const getProductList = (keyword = '') => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_FETCHING_PRODUCT });
      const { data } = await Axios.get(`/api/products?keyword=${keyword}`);
      dispatch({ type: GET_PRODUCT_LIST, data: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_FETCHING_PRODUCT });
      const { data } = await Axios.get(`/api/products/${id}`);
      dispatch({ type: GET_PRODUCT_DETAIL, data: data });
    } catch (error) {
      console.log(error);
    }
  };
};
