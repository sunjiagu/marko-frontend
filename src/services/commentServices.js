import api from './api';

export const getComments = () => api.get('/comments/');
export const getComment = (id) => api.get(`/comments/${id}/`);
export const createComment = (commentData) => api.post('/comments/', commentData);
export const updateComment = (id, commentData) => api.put(`/comments/${id}/`, commentData);
export const deleteComment = (id) => api.delete(`/comments/${id}/`);
export const likeComment = (id) => api.post(`/comments/${id}/like/`);