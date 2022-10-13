import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const getBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const getDogByBreed = async breed => {
  const response = await axios.get('/images/search', {
    params: { breed_id: breed }
  });
  return response.data[0];
};
