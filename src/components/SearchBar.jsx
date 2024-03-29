import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Search} from "@mui/icons-material";

const SearchBar = () => {
   const [searchTerm, setSearchTerm] = useState('');

   const navigate = useNavigate()

   const handleSubmit = (e) => {
e.preventDefault();
if(searchTerm){
navigate(`/search/${searchTerm}`);
setSearchTerm('');
}
   }

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        pl: 1,
        borderRadius: 20,
        border: "4px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input 
      className="search-bar"
      placeholder="Search ..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{p:"10px", color:"#dda15e"}} aria-label="hello">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
