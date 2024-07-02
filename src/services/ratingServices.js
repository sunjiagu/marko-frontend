import api from './api';

export const getRatings = () => api.get('/ratings/');
export const getRating = (id) => api.get(`/ratings/${id}/`);
export const createRating = (ratingData) => api.post('/ratings/', ratingData);
export const updateRating = (id, ratingData) => api.put(`/ratings/${id}/`, ratingData);
export const deleteRating = (id) => api.delete(`/ratings/${id}/`);
export const rateRating = (id, ratingValue) => api.post(`/ratings/${id}/rate/`, { rating_value: ratingValue });