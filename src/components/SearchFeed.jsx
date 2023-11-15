import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Videos, Loader, Navbar } from './'; // Assuming you have Videos, Loader, and Navbar components
import { Box, Typography } from '@mui/material';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setVideos(null); // Reset videos to null while fetching new data
        const data = await fetchFromAPI('search', {
          params: {
            part: 'snippet',
            q: searchTerm,
            maxResults: 48,
          },
        });
        console.log('SearchFeed component re-rendered with searchTerm:', searchTerm, data.items);
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function to reset videos when the component unmounts or when the search term changes
    return () => {
      setVideos(null);
    };
  }, [searchTerm]);

  return (
    <Box sx={{ backgroundColor: "#000", paddingTop: "56px" }}> {/* Adjust paddingTop to account for the Navbar height */}
      <Navbar />

      <Box p={2}>
        <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <p>Search Results for {searchTerm}</p>
        </Typography>
        {videos ? <Videos videos={videos} /> : <Loader />} {/* Assuming you have a Loader component */}
      </Box>
    </Box>
  );
};

export default SearchFeed;
