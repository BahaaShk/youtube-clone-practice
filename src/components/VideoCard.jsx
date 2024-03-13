import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id : {videoId}, snippet}}) => {
  return (
    <Card  sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
<CardMedia image={snippet?.thumbnails?.high?.url}
alt = {snippet?.title}
sx={{height:180, width:358}}
/>
</Link>
<CardContent sx={{height:"106px", backgroundColor:"#1e1e1e"}}>
<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
  <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"}>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
</Link>
<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
  <Typography variant="subtitle2" color={"gray"} fontWeight={"bold"}>{snippet?.channelTitle || demoChannelTitle}
  <CheckCircle sx={{ml:"5px", fontSize: 12, color:"gray"}} />
  </Typography>
</Link>
</CardContent>
    </Card>
  )
}

export default VideoCard