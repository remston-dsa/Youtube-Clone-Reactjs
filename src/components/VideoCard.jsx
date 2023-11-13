import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet }, comments }) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: '100%', height: 180, borderRadius: '8px 8px 0 0' }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px', borderRadius: '0 0 8px 8px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" mb={1}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" color="gray" display="flex" alignItems="center" mb={1}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
      {/* Display comments */}
      {comments && (
        <Typography variant="body2" color="gray" overflow="hidden" textOverflow="ellipsis">
          {comments.map((comment, index) => (
            <div key={index}>{comment.snippet.topLevelComment.snippet.textDisplay}</div>
          ))}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default VideoCard;
