import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    url: BASE_URL,
    params: {
maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd7a9458601msh48a38d6c7783933p15ef60jsnede7e5a040be',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
  const response =  await axios.get(`${BASE_URL}/${url}`, options);
  return response.data;
  }