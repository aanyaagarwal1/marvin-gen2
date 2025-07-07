// // import { Box } from "@mui/material";
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';


// // function BotStatus() {
// //   return (
// //     <Box sx={{ width: 300, mx: "auto", mt: 4 }}>
// //       {/* <Button fullWidth variant="contained">Sign in with Google</Button>
// //       <Divider sx={{ my: 2 }}>OR</Divider>
// //       <Button fullWidth variant="outlined">Sign in with Email</Button> */}
// //     </Box>
// //   );
// // }
// import React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function BotStatus() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function BotStatus() {
//   const [mode, setMode] = useState('Automatic');

//   const handleModeChange = (newMode) => {
//     setMode(newMode);
//   };

//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             Bot Status
//           </Typography>
//           <Typography variant="h5" component="div">
//             Mode: {mode}
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             Current cleaning mode of your bot.
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button 
//             size="small" 
//             variant={mode === 'Automatic' ? 'contained' : 'outlined'}
//             onClick={() => handleModeChange('Automatic')}
//           >
//             Auto
//           </Button>
//           <Button 
//             size="small" 
//             variant={mode === 'Manual' ? 'contained' : 'outlined'}
//             onClick={() => handleModeChange('Manual')}
//           >
//             Manual
//           </Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            onClick={() => handleModeChange('Auto')}
          >
            Auto
          </Button>
          <Button 
            size="small" 
            variant={mode === 'Manual' ? 'contained' : 'outlined'}
            onClick={() => handleModeChange('Manual')}
          >
            Manual
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
