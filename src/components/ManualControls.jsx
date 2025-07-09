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
// import {ReactComponent as Branding} from "../assets/mars.svg";
// import Typography from '@mui/material/Typography';
export default function ManualControls() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    //outer box
  //   <Box
  //   sx={{
  //     width: 420,
  //     height: 680,
  //     bgcolor: '#fff',
  //     borderRadius: 6,
  //     border: '1px solid #ccc',
  //     boxShadow: 3,
  //     p: 3,
  //     textAlign: 'center',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
      
  //   }}
  // >
<Box
  sx={{
    // // width: 350,
    // width: '100%',
    // maxWidth: 350,
    // aspectRatio: '1 / 1', 
    // // width:{ xs: 250, sm: 300, md: 350 },
    // height: { xs: 250, sm: 300, md: 350 },
    // // height: 350,
    // bgcolor: '#000',
    // borderRadius: '50%',
    // border: '2px solid #ccc',
    // position: 'relative',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',

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
      // width: 170,
      // height: 170,

      // width: '50%',
      // height: '50%',
      // bgcolor: '#fff',
      // borderRadius: '50%',
      // position: 'absolute',

      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',

      width: 167,
      height: 167,
      bgcolor: '#fff',
      borderRadius: '50%',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // <Branding style={{ width: 100, height: 100, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
    }}
    >
      {/* <Branding style={{ width: 100, height: 100 }} /> */}
    </Box>
    <IconButton onClick={() => { 
      sendCommand("forward")
      setTimeout(() => { sendCommand("stop")
    
      },2000);
    }} sx={{ position: 'absolute', top: 20 }}><ArrowUpwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => {
      sendCommand("backward")
      setTimeout(() => {
        sendCommand("stop")
      }, 2000);
      }} sx={{ position: 'absolute', bottom: 20 }}><ArrowDownwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => {
      sendCommand("left")
      setTimeout(() => {
        sendCommand("stop")
      }, 10);
      }} sx={{ position: 'absolute', left: 20 }}><ArrowLeftwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => { sendCommand("right")
      setTimeout(() => {
        sendCommand("stop")
      }, 10);
    }} sx={{ position: 'absolute', right: 20 }}><ArrowRightwardIcon style={{ width: 31, height: 31 }}/></IconButton>
  </Box>
// </Box>
  )
}