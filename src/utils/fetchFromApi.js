import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const defaultOptions = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '981256a2b8msh35f47b95ac2f048p17d85bjsn371db1b8d6b1',
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
