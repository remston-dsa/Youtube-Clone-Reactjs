import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('News');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setVideos(null);
        const response = await fetchFromAPI('search', {
          params: {
            q: selectedCategory,
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: 48,
            order: 'date',
          },
        });
        setVideos(response.items);
        console.log('API Response:', response);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const delay = 2000; // 2 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          &copy; Copyright 2023 by Remston Dsa.
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
