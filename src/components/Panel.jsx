import React from 'react';
import Box from '@mui/material/Box';
import BotStatus from './BotStatus';
import ManualControls from './ManualControls';

export default function Panel() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: { xs: 'column', md: 'row' },
    //     // gap: { xs: 4, md: 8 },
    //     gap: 4,
    //     padding: 4,
    //     alignItems: 'center',
    //     justifyContent:'center',
    //     // px: 4,
    //     // py: 6,
    //     flexWrap: 'wrap',
    //   }}
    // >
    //    <Box sx={{width: { xs: '100%', sm: '40%', md: '30%' }, maxWidth: 320  }}>
    //   <BotStatus />
    //   </Box>
    //   <Box sx={{ width: { xs: '100%', sm: '50%' }, maxWidth: 400  }}>
    //   <ManualControls />
    //   </Box>
    // </Box>
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4,
      padding: 4,
      alignItems: 'center',
      justifyContent: { xs: 'center', md: 'flex-start' },
    }}
  >
    <BotStatus />
    <Box sx={{ mt: { xs: 4, md: 0 }, ml: { md: 8 } }}>
    <ManualControls />
    </Box>
  </Box>
  );
}
