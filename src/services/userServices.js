import api from './api';

export const getUsers = () => api.get('/users/');
export const getUser = (id) => api.get(`/users/${id}/`);
export const updateUser = (id, userData) => api.put(`/users/${id}/`, userData);
export const onboardUser = (id) => api.post(`/users/${id}/onboard/`);