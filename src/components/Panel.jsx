import React from 'react';
import Box from '@mui/material/Box';
import BotStatus from './BotStatus';
import ManualControls from './ManualControls';

export default function Panel() {
  return (
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
