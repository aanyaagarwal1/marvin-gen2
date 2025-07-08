import React from "react";
import { useState } from "react";
import PowerButton from "./components/PowerButton";
// import BotStatus from "./components/BotStatus.jsx";
import Stats from "./components/Stats.jsx";
import PowerOff from "./components/PowerOff.jsx";
import { ThemeProvider, createTheme, CssBaseline, Box, IconButton } from "@mui/material";
import { ReactComponent as SunIcon} from "./assets/dark mode icon.svg";
import { ReactComponent as MoonIcon} from "./assets/light mode icon.svg";
// import Dpad from "./components/ManualControls.jsx";
import Panel from"./components/Panel.jsx";

function App(){ const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
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
            {darkMode ? <SunIcon style={{ width: 24, height: 24 }} /> : <MoonIcon style={{ width: 24, height: 24 }} />}
            </IconButton>
          </Box>
  
          {/* App Components */}
          <PowerButton />
          {/* <BotStatus />
          <Dpad /> */}
          {/* <Panel /> */}
         
      <Panel />
   
          {/* <MotorSlider />  
          <VaccumSlider />     */}
          <Stats />
          <PowerOff />
          </Box>
         
          </div>
      </ThemeProvider>
    );
  }
  
export default App;



