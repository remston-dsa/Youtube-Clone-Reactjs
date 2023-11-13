import React from 'react';
import { Stack, Box } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="stretch" // Ensures all items stretch to fill the available height
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} flex="1"> {/* Added flex property to make each item fill the space */}
          {(item.id.videoId && <VideoCard video={item}/>) || (item.snippet.channelId && <ChannelCard channelDetail={item} />)}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
