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
import {Button} from "@mui/material";
import { useState, useEffect } from "react";

export default function ManualControls() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };
  const [mode, setMode] = useState('auto');
  
    useEffect(() => {
      const savedMode = localStorage.getItem('mode');
      if (savedMode === 'auto' || savedMode === 'manual') {
        setMode(savedMode);
      }
    }, []);
    console.log("Mode in ManualControls:", mode);
  return (
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
      <Button
        onClick={() => {
          if(mode === 'manual')
          sendCommand("stop")}}
        sx={{
          width: 167,
          height: 167,
          bgcolor: '#fff',
          borderRadius: '50%',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#000', fontSize: '1.6rem', fontWeight: 'bold' }}>
          STOP
        </span>
      </Button>

      <IconButton onClick={() => {
      if(mode === 'manual')
        {sendCommand("forward")}}} sx={{ position: 'absolute', top: 20 }}>
        <ArrowUpwardIcon style={{ width: 31, height: 31 }}/>
      </IconButton>

      <IconButton
        onClick={() => {
          if(mode === 'manual'){ sendCommand("backward");}
        }}
        sx={{ position: 'absolute', bottom: 20 }}
      >
        <ArrowDownwardIcon style={{ width: 31, height: 31 }}/>
      </IconButton>

      <IconButton
        onClick={() => {
          if(mode === 'manual')
          {
          sendCommand("stop");
          sendCommand("left");
          setTimeout(() => sendCommand("stop"), 10);
          setTimeout(() => sendCommand("forward"), 2);
        }}}
        sx={{ position: 'absolute', left: 20 }}
      >
        <ArrowLeftwardIcon style={{ width: 31, height: 31 }}/>
      </IconButton>

      <IconButton
        onClick={() => {
          if(mode === 'manual')
          {
          sendCommand("right");
          setTimeout(() => sendCommand("stop"), 10);
        }}}
        sx={{ position: 'absolute', right: 20 }}
      >
        <ArrowRightwardIcon style={{ width: 31, height: 31 }}/>
      </IconButton>
    </Box>
  );
}



