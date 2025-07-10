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
