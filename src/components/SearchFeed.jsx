import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Videos, Loader } from './'; // Assuming you have Videos and Loader components

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
    <div className="search-feed">
      <h2>Search Results for "{searchTerm}"</h2>
      {videos ? <Videos videos={videos} /> : <Loader />} {/* Assuming you have a Loader component */}
    </div>
  );
};

export default SearchFeed;
