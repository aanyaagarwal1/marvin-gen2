import React from  "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase.js";
import './ManualControls.css';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import IconButton from "@mui/material";
import { IconButton } from "@mui/material";
import {ReactComponent as ArrowUpwardIcon} from "../assets/front.svg";
import {ReactComponent as ArrowDownwardIcon} from "../assets/back.svg";
import {ReactComponent as ArrowRightwardIcon} from "../assets/right.svg";
import {ReactComponent as ArrowLeftwardIcon} from "../assets/left.svg";
import {Button} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
// import Typography from "@mui/material";
// import {ReactComponent as Branding} from "../assets/mars.svg";
// import Typography from '@mui/material/Typography';
export default function ManualControls() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };

  const [mode, setMode] = useState('Auto');

useEffect(() => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'Auto' || savedMode === 'Manual') {
    setMode(savedMode);
  }
}, []);

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
  <Button
    onClick={() => {
      sendCommand("stop")
    }}
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
      <span style={{ color: '#000', fontSize: '1.6rem', fontWeight: 'bold' }}>
    STOP
  </span>
    </Button>
    <IconButton onClick={() => { 
      sendCommand("forward")
      // setTimeout(() => { sendCommand("stop")
      // },5000);
    }} sx={{ position: 'absolute', top: 20 }}><ArrowUpwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => {
      if(mode === 'Manual') {
      sendCommand("backward")
      // setTimeout(() => {
      //   sendCommand("stop")
      // }, 5000);
    }
      }} sx={{ position: 'absolute', bottom: 20 }}><ArrowDownwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => {
      sendCommand("left")
      setTimeout(() => {
        sendCommand("stop")
      }, 10);
      setTimeout(() => {
        sendCommand("forward")
      }, 2);
      }} sx={{ position: 'absolute', left: 20 }}><ArrowLeftwardIcon style={{ width: 31, height: 31 }}/></IconButton>
    <IconButton onClick={() => { sendCommand("right")
      setTimeout(() => {
        sendCommand("stop")
      }, 10);
      setTimeout(() => {
        
      },1);
    }} sx={{ position: 'absolute', right: 20 }}><ArrowRightwardIcon style={{ width: 31, height: 31 }}/></IconButton>
  </Box>
// </Box>
  )
}



import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ref, set } from "firebase/database";
import { db } from "../firebase.js"; 
import { useEffect } from 'react';
export default function BotStatus() {
  const [mode, setMode] = useState('Auto'); // keep short label internally

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'auto' || savedMode === 'manual') {
      setMode(savedMode);
    }
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    localStorage.setItem('mode',newMode); // Store mode in localStorage
  };

  // Convert internal label to full display name
  const getFullModeName = (savedMode) => {
    switch (savedMode) {
      case 'auto':
        return 'Automatic';
      case 'manual':
        return 'Manual';
      default:
        return savedMode;
    }
  };
  const sendCommand = (command) => {
      set(ref(db, "/marvinBot/command"), command)
        .then(() => console.log("Command sent:", command))
        .catch((error) => console.error("Error sending command:", error));
    };

  return (
    <Box sx={{ width: 280 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Bot Status
          </Typography>
          <Typography variant="h5" component="div">
            Mode: {getFullModeName(mode)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Current cleaning mode of your bot.
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            variant={mode === 'Auto' ? 'contained' : 'outlined'}
            onClick={() =>
               {handleModeChange('Auto')
                sendCommand("auto")
               }
              }
          >
            Auto
          </Button>
          <Button 
            size="small" 
            variant={mode === 'Manual' ? 'contained' : 'outlined'}
            onClick={() => 
            { handleModeChange('Manual')
              sendCommand("manual")
              localStorage.setItem("mode", "manual") // Store mode in localStorage
              console.log("Mode changed to Manual");
            }
          }
          >
            Manual
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
