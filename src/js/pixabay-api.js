import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50613433-846385d44e3ce175ad59ef638';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data.hits);
}
