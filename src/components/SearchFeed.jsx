import { Box, Typography } from '@mui/material'
import React from 'react'
import {Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
const [videos,setVideos] = React.useState([]);
const {searchTerm} = useParams()

  React.useEffect(() => {
fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {setVideos(data.items)})
  }, [searchTerm])
  return (
  <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>
    <Typography variant="h4" style={{fontWeight:"bold", mb:4, color:"white"}}>Here are the results for : <span style={{color:"#dda15e"}}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed