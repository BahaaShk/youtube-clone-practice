import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
if(!videos?.length) return <Loader />

  return <Stack direction= { direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="center" gap={3} mt={"20px"}>
    {
        videos.map((item,idx) => {
            return (
                <Box key={idx}>
{item.id.videoId && <VideoCard  video={item}/>}
{item.id.channelId && <ChannelCard  channelDetail={item}/>}
                </Box>
            )
        })
    }
  </Stack>;
};

export default Videos;
