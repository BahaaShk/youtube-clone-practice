import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import {SideBar, Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const Feed = () => {
const [selectedCategory,setSelectedCategory] = React.useState('New')
const [videos,setVideos] = React.useState([]);

  React.useEffect(() => {
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {setVideos(data.items)})
  }, [selectedCategory])
  return (
    <Stack sx={{ 
      flexDirection: { md:"row", sx:"column"}
    }}>
      <Box sx={{height: {sx:'auto', md:"92vh"}, px:{sx:0, md:2}, color:"white"}}>
        <SideBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      </Box>
      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" style={{fontWeight:"bold", mb:2, color:"white"}} sx={{marginInline:{sm:"30px", md:"20px"}}}>{selectedCategory} <span style={{color:"#dda15e"}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed