import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const defaultOptions = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'baa30c2670msh5bc7bfaf4e63ad6p18cbc2jsn8deb90ef7beb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url, customOptions = {}) => {
  const mergedOptions = {
    ...defaultOptions,
    ...customOptions,
  };

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, mergedOptions);
    return data;
  } catch (error) {
    // Handle errors appropriately (e.g., logging, throwing a custom error, etc.)
    console.error('API request failed:', error);
    throw error;
  }
};
