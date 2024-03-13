import { Box } from '@mui/material'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import {fetchFromAPI} from '../utils/fetchFromAPI'
import {Videos, ChannelCard} from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight={'95vh'} >
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(188,108,37,1) 0%, rgba(221,161,94,1) 50%, rgba(188,108,37,0.923406862745098) 100%)', height:"300px", zIndex:10}}
        
        />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{mr:{sm:"100px"}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail