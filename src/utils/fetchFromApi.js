import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const defaultOptions = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'bfbca1ef75msh146a3bca32d938dp1a2049jsn01b867b0f937',
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
