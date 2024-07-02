import api from './api';

export const getTags = () => api.get('/tags/');
export const getTag = (id) => api.get(`/tags/${id}/`);
export const createTag = (tagData) => api.post('/tags/', tagData);
export const updateTag = (id, tagData) => api.put(`/tags/${id}/`, tagData);
export const deleteTag = (id) => api.delete(`/tags/${id}/`);
export const getTagRatings = (id) => api.get(`/tags/${id}/ratings/`);
export const addRatingToTag = (id, ratingData) => api.post(`/tags/${id}/add_rating/`, ratingData);
export const getFeaturedTags = () => api.get('/tags/featured/');