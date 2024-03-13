import { Box, CardContent, Card, Typography, CardMedia } from "@mui/material";
import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        margin: "auto",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              border: "2px solid #e3e3e3",
              mb: 2,
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ ml: "5px", fontSize: 14, color: "gray" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography color={"red"}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
