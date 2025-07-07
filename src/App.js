import React from "react";
import { useState } from "react";
import PowerButton from "./components/PowerButton";
import BotStatus from "./components/BotStatus.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import Stats from "./components/Stats.jsx";
import PowerOff from "./components/PowerOff.jsx";
// import VaccumSlider from "./components/VaccumSlider.jsx";

// import MotorSlider from "./components/MotorSlider.jsx";

import { ThemeProvider, createTheme, CssBaseline, Box, IconButton } from "@mui/material";

import SunIcon from "./icons/sun.jsx";
import MoonIcon from "./icons/moon.jsx";
function App(){ const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            p: 4,
            bgcolor: "background.default",
            color: "text.primary",
            minHeight: "100vh",
          }}
        >
          {/* Header & Theme Toggle */}
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <h1 className="text-2xl font-bold">MARVIN.v2 Control Panel</h1>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              <img
                src={darkMode ? SunIcon : MoonIcon}
                alt="Toggle Theme"
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Box>
  
          {/* App Components */}
          <PowerButton />
          <BotStatus />
          <ControlPanel />
          {/* <MotorSlider />  
          <VaccumSlider />     */}
          <Stats />
          <PowerOff />
          </Box>
      </ThemeProvider>
    );
  }
  
export default App;



