import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...products, action.payload];
    case UPDATE:
      return products.map((item) => (item._id === action.payload._id ? action.payload : products));
    case DELETE:
      return products.filter((item) => item._id !== action.payload);
    default:
      return products;
  }
};