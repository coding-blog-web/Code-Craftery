
import React from "react";
import {Box} from "@mui/material";
import Sidebar from "./sideMenu";
// import VoiceNavigation from "../components/voice";

const  Header= () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar /> 
      {/* <VoiceNavigation /> */}
    </Box>
  );
};
export default Header;