import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (product = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...product, action.payload];
    case UPDATE:
      return product.map((item) => (item._id === action.payload._id ? action.payload : product));
    case DELETE:
      return product.filter((item) => item._id !== action.payload);
    default:
      return product;
  }
};