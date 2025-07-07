import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ref, set } from "firebase/database";
import { db } from "../firebase.js"; 

export default function BotStatus() {
  const [mode, setMode] = useState('Auto'); // keep short label internally

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  // Convert internal label to full display name
  const getFullModeName = (mode) => {
    switch (mode) {
      case 'Auto':
        return 'Automatic';
      case 'Manual':
        return 'Manual';
      default:
        return mode;
    }
  };
  const sendCommand = (command) => {
      set(ref(db, "/marvinBot/command"), command)
        .then(() => console.log("Command sent:", command))
        .catch((error) => console.error("Error sending command:", error));
    };

  return (
    <Box sx={{ minWidth: 205 }}>
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
