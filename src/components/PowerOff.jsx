// import React, { useState, useEffect } from 'react';
// import { Box, Card, Typography, } from '@mui/material';
// export default function StopAtTimeButton() {
//   const [stopTime, setStopTime] = useState('');
//   const [robotRunning, setRobotRunning] = useState(true);

//   useEffect(() => {
//     if (!stopTime || !robotRunning) return;

//     // Parse stop time (HH:MM) in IST
//     const [hour, minute] = stopTime.split(':').map(Number);
//     const now = new Date();

//     // Create a stop time in IST today
//     const stopAt = new Date(
//       now.getFullYear(),
//       now.getMonth(),
//       now.getDate(),
//       hour,
//       minute,
//       0
//     );

//     // Convert to IST if needed (your system time may already be IST)
//     const timeUntilStop = stopAt - now;

//     if (timeUntilStop > 0) {
//       const timer = setTimeout(() => {
//         setRobotRunning(false);
//         alert('Robot stopped automatically at set time!');
//       }, timeUntilStop);

//       return () => clearTimeout(timer); // Clean up on unmount
//     }
//   }, [stopTime, robotRunning]);

//   return (
//     <div>
//       <h2>Schedule Power Off At </h2>

//       <label>
//         Stop Time (IST):&nbsp;
//         <input
//           type="time"
//           value={stopTime}
//           onChange={(e) => setStopTime(e.target.value)}
//         />
//       </label>

//       {/* <br />
//       <button onClick={() => setRobotRunning(true)} disabled={robotRunning}>
//         Start Robot Again
//       </button> */}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button, TextField } from '@mui/material';

export default function StopAtTimeButton() {
  const [stopTime, setStopTime] = useState('');
  const [robotRunning, setRobotRunning] = useState(true);

  useEffect(() => {
    if (!stopTime || !robotRunning) return;

    const [hour, minute] = stopTime.split(':').map(Number);
    const now = new Date();

    const stopAt = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0
    );

    const timeUntilStop = stopAt - now;

    if (timeUntilStop > 0) {
      const timer = setTimeout(() => {
        setRobotRunning(false);
        alert('Robot stopped automatically at set time!');
      }, timeUntilStop);

      return () => clearTimeout(timer);
    }
  }, [stopTime, robotRunning]);

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Schedule Power Off
          </Typography>

          <TextField
            label="Stop Time (IST)"
            type="time"
            value={stopTime}
            onChange={(e) => setStopTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min steps
            }}
            fullWidth
          />

          <Typography sx={{ mt: 2 }} color={robotRunning ? 'green' : 'error.main'}>
            Robot Status: {robotRunning ? 'Running' : 'Stopped'}
          </Typography>
        </CardContent>

        <CardActions>
          <Button 
            size="small" 
            variant="contained" 
            onClick={() => setRobotRunning(true)} 
            disabled={robotRunning}
          >
            Start Robot Again
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
