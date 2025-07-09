
import React, { useState } from 'react';
import { Box, Card, Typography, Slider } from '@mui/material';
import { db } from '../firebase';
import { ref, set } from 'firebase/database';

export default function SpeedBatteryDisplay() {
  const [motorSpeed, setMotorSpeed] = useState(0);
  const [vacuumSpeed, setVacuumSpeed] = useState(0);
  const battery = 100; // Placeholder for dynamic battery value

  const handleMotorSpeedChange = (e, val) => {
    console.log('Motor Speed :' , val)
    setMotorSpeed(val);
    set(ref(db, '/marvinBot/motorSpeed'), val);
    sendCommand(val);
  };

  const handleVacuumSpeedChange = (e, val) => {
    console.log('Vaccum Speed :' , val)
    setVacuumSpeed(val);
    set(ref(db, '/marvinBot/vaccumspeed'), val);
    sendCommand(val);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Display Card */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          display: 'flex',
          justifyContent: 'space-around',
          mb: 4,
        }}
      >
        <Metric value={motorSpeed} 
        label="Motor 
        Speed" />
        <Metric value={vacuumSpeed} label="Vacuum Speed" />
        <Metric value={battery} label="Battery" />
      </Card>

      {/* Sliders */}
      <Box sx={{ px: 2 }}>
        <Typography gutterBottom>Motor Speed</Typography>
        <Slider
          value={motorSpeed}
          onChange={handleMotorSpeedChange}
          min={0}
          max={100}
        />
        <Typography gutterBottom sx={{ mt: 2 }}>Vacuum Speed</Typography>
        <Slider
          value={vacuumSpeed}
          onChange={handleVacuumSpeedChange}
          min={0}
          max={100}
        />
      </Box>
    </Box>
  );
}

// Reusable Metric Component
function Metric({ value, label }) {
  return (
    <Box textAlign="center">
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}
