import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchProducts = () => API.get('/api/product');
export const createProduct = (newProduct) => API.post('/api/product', newProduct);
export const updateProduct = (id, updatedProduct) => API.put(`/api/product/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/api/product/${id}`);
