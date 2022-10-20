import axios from 'axios';

export default function Pixabay(page, q) {
  const API_KEY = '29734937-a1bb6321c0aa9fb14b8f0bfa0';
  const BASE_URL = 'https://pixabay.com/api';

  const urlSearchParams = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  return axios.get(`${BASE_URL}/?${urlSearchParams}`);
}
