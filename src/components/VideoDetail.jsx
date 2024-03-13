import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)
  const params = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${params.id}`).then(
      (data) => setVideoDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${params.id}&type=video`).then((data) =>
    setVideos(data?.items)
    );
  }, [params.id]);

if(!videoDetail?.snippet) return <Loader />

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${params.id}`}
            className ="react-player"
          controls
            />
            <Typography variant="h5" color="#fff" p={2} fontWeight={"bold"} >
              {title}
            </Typography>
            <Stack direction='row' justifyContent={"space-between"} sx={{color:"#fff"}} py = {1} px={2}>
<Link to={`/channel/${channelId}`}>
  <Typography variant={{sm:'subtitle1', md:"h6"}} color={"#fff"} fontWeight={"bold"}>{channelTitle}
  <CheckCircle sx={{ ml: "5px", fontSize: 12, color: "gray" }} />
  </Typography>
</Link>
<Stack direction={"row"} spacing={3}  alignItems={"center"}>
  <Typography variant="body1" sx={{opacity: 0.5}}>
    {parseInt(viewCount).toLocaleString()} views
  </Typography>
  <Typography variant="body1" sx={{opacity: 0.5}}>
    {parseInt(likeCount).toLocaleString()} likes
  </Typography>
</Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent={"center"} alignItems={"center"}>
<Videos videos={videos} direction="column" />
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
