export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42288683-bcb102b26af62e2f4c986d9af';

// code using axios
export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};