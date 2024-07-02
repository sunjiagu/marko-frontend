import api from './api';

export const uploadImage = (imageFile) => {
  const formData = new FormData();
  formData.append('file', {
    uri: imageFile.uri,
    type: 'image/jpeg',
    name: 'image.jpg',
  });

  return api.post('/upload-image/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};