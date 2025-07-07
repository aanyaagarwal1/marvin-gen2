import React from  "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase.js";
import './ManualControls.css';
import Box from '@mui/material/Box';
import { IconButton } from "@mui/material";
import {ReactComponent as ArrowUpwardIcon} from "../assets/front.svg";
import {ReactComponent as ArrowDownwardIcon} from "../assets/back.svg";
import {ReactComponent as ArrowRightwardIcon} from "../assets/right.svg";
import {ReactComponent as ArrowLeftwardIcon} from "../assets/left.svg";
// import Typography from '@mui/material/Typography';
export default function ManualControls() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    //outer box
    <Box
    sx={{
      width: 420,
      height: 680,
      bgcolor: '#fff',
      borderRadius: 6,
      border: '1px solid #ccc',
      boxShadow: 3,
      p: 3,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}
  >
<Box
  sx={{
    width: 350,
    height: 350,
    bgcolor: '#000',
    borderRadius: '50%',
    border: '2px solid #ccc',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
  <Box
    sx={{
      width: 170,
      height: 170,
      bgcolor: '#fff',
      borderRadius: '50%',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
    </Box>
    <IconButton onClick={() => sendCommand("forward")} sx={{ position: 'absolute', top: 20 }}><ArrowUpwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => sendCommand("backward")} sx={{ position: 'absolute', bottom: 20 }}><ArrowDownwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => sendCommand("left")} sx={{ position: 'absolute', left: 20 }}><ArrowLeftwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => sendCommand("right")} sx={{ position: 'absolute', right: 20 }}><ArrowRightwardIcon style={{ width: 31, height: 31 }}/></IconButton>
  </Box>
</Box>
  )
}