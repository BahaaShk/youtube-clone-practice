import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "sticky",
        alignItems: "center",
        p: 2,
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#dda15e",
            color: "#fefae0",
            paddingInline: "8px",
            paddingBlock: "8px",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily:"monospace",
            fontStyle: "italic",
            letterSpacing:"2px",
            // marginLeft: "2px",
            borderRadius: "50px",
          }}
        >
          Youtube
        </div>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
