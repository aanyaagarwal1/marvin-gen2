// // import React, { useState, useEffect } from 'react';
// // import { Box, Card, Typography, } from '@mui/material';
// // export default function StopAtTimeButton() {
// //   const [stopTime, setStopTime] = useState('');
// //   const [robotRunning, setRobotRunning] = useState(true);

// //   useEffect(() => {
// //     if (!stopTime || !robotRunning) return;

// //     // Parse stop time (HH:MM) in IST
// //     const [hour, minute] = stopTime.split(':').map(Number);
// //     const now = new Date();

// //     // Create a stop time in IST today
// //     const stopAt = new Date(
// //       now.getFullYear(),
// //       now.getMonth(),
// //       now.getDate(),
// //       hour,
// //       minute,
// //       0
// //     );

// //     // Convert to IST if needed (your system time may already be IST)
// //     const timeUntilStop = stopAt - now;

// //     if (timeUntilStop > 0) {
// //       const timer = setTimeout(() => {
// //         setRobotRunning(false);
// //         alert('Robot stopped automatically at set time!');
// //       }, timeUntilStop);

// //       return () => clearTimeout(timer); // Clean up on unmount
// //     }
// //   }, [stopTime, robotRunning]);

// //   return (
// //     <div>
// //       <h2>Schedule Power Off At </h2>

// //       <label>
// //         Stop Time (IST):&nbsp;
// //         <input
// //           type="time"
// //           value={stopTime}
// //           onChange={(e) => setStopTime(e.target.value)}
// //         />
// //       </label>

// //       {/* <br />
// //       <button onClick={() => setRobotRunning(true)} disabled={robotRunning}>
// //         Start Robot Again
// //       </button> */}
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from 'react';
// import { Box, Card, CardContent, CardActions, Typography, Button, TextField } from '@mui/material';

// export default function StopAtTimeButton() {
//   const [stopTime, setStopTime] = useState('');
//   const [robotRunning, setRobotRunning] = useState(true);

//   useEffect(() => {
//     if (!stopTime || !robotRunning) return;

//     const [hour, minute] = stopTime.split(':').map(Number);
//     const now = new Date();

//     const stopAt = new Date(
//       now.getFullYear(),
//       now.getMonth(),
//       now.getDate(),
//       hour,
//       minute,
//       0
//     );

//     const timeUntilStop = stopAt - now;

//     if (timeUntilStop > 0) {
//       const timer = setTimeout(() => {
//         setRobotRunning(false);
//         alert('Robot stopped automatically at set time!');
//       }, timeUntilStop);

//       return () => clearTimeout(timer);
//     }
//   }, [stopTime, robotRunning]);

//   return (
//     <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
//       <Card variant="outlined">
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Schedule Power Off
//           </Typography>

//           <TextField
//             label="Stop Time (IST)"
//             type="time"
//             value={stopTime}
//             onChange={(e) => setStopTime(e.target.value)}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             inputProps={{
//               step: 300, // 5 min steps
//             }}
//             fullWidth
//           />

//           <Typography sx={{ mt: 2 }} color={robotRunning ? 'green' : 'error.main'}>
//             Robot Status: {robotRunning ? 'Running' : 'Stopped'}
//           </Typography>
//         </CardContent>

//         <CardActions>
//           <Button 
//             size="small" 
//             variant="contained" 
//             onClick={() => setRobotRunning(true)} 
//             disabled={robotRunning}
//           >
//             Start Robot Again
//           </Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }
 
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import { db } from '../firebase'; // Adjust the import based on your project structure
import { ref, set } from 'firebase/database';
// First Card: Stop at specific time
function StopAtTimeCard() {
  const sendCommand = (command) => {
      set(ref(db, "/marvinBot/command"), command)
        .then(() => console.log("Command sent:", command))
        .catch((error) => console.error("Error sending command:", error));
    };
  const [stopTime, setStopTime] = useState('');
  const [robotRunning, setRobotRunning] = useState(false);

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
        sendCommand("off");
      }, timeUntilStop);

      return () => clearTimeout(timer);
    }
  }, [stopTime, robotRunning]);

  return (
    <Card variant="outlined" sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Schedule Power Off
        </Typography>
        <TextField
          label="Stop Time (IST)"
          type="time"
          value={stopTime}
          onChange={(e) => setStopTime(e.target.value)}
          InputLabelProps={{ shrink: true }}
          inputProps={{ step: 300 }}
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
          onClick={() => {
            setRobotRunning(true)
            sendCommand("auto");
          }}
          disabled={robotRunning}
        >
          Start Robot Again
        </Button>
      </CardActions>
    </Card>
  );
}

// Second Card: Start and stop interval
function TimedCleaningCard() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [robotRunning, setRobotRunning] = useState(false);

  useEffect(() => {
    if (!startTime || !endTime) return;

    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const now = new Date();

    const startAt = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      startHour,
      startMinute,
      0
    );

    const endAt = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      endHour,
      endMinute,
      0
    );

    const timeUntilStart = startAt - now;
    const timeUntilEnd = endAt - now;

    if (timeUntilStart > 0) {
      const startTimer = setTimeout(() => {
        setRobotRunning(true);
        alert('Robot started cleaning!');
      }, timeUntilStart);

      return () => clearTimeout(startTimer);
    } else if (timeUntilEnd > 0 && now >= startAt) {
      // Already within cleaning interval
      setRobotRunning(true);
    }

    if (timeUntilEnd > 0) {
      const stopTimer = setTimeout(() => {
        setRobotRunning(false);
        alert('Robot finished cleaning!');
        sendCommand("off");
      }, timeUntilEnd);

      return () => clearTimeout(stopTimer);
    }
  }, [startTime, endTime]);

  return (
    <Card variant="outlined" sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Schedule Cleaning Interval
        </Typography>
        <TextField
          label="Start Time (IST)"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          InputLabelProps={{ shrink: true }}
          inputProps={{ step: 300 }}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="End Time (IST)"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          InputLabelProps={{ shrink: true }}
          inputProps={{ step: 300 }}
          fullWidth
        />
        <Typography sx={{ mt: 2 }} color={robotRunning ? 'green' : 'error.main'}>
          Robot Status: {robotRunning ? 'Cleaning' : 'Idle'}
        </Typography>
      </CardContent>
    </Card>
  );
}

// Parent: Combine both cards side by side
export default function DualScheduleControlPanel() {
  return (
    <Box sx={{ flexGrow: 1, mx: 'auto', mt: 4, maxWidth: 900 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <StopAtTimeCard />
        </Grid>
        <Grid item>
          <TimedCleaningCard />
        </Grid>
      </Grid>
    </Box>
  );
}
