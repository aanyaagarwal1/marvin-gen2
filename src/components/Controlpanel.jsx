import React from "react";
import { Box, Typography, IconButton, Button, Grid, Paper, Switch } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ControlPanel = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", minHeight: "100vh", p: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Dark Mode
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ bgcolor: "#111", p: 3, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <IconButton>
                <PowerSettingsNewIcon sx={{ fontSize: 36, color: '#ccc' }} />
              </IconButton>
              <Brightness2Icon sx={{ fontSize: 24 }} />
              <Button variant="contained" color="inherit">
                Auto
              </Button>
            </Box>

            <Grid container spacing={2} sx={{ mt: 3 }}>
              {["Motor speed", "Vaccum Speed", "Battery"].map((label, index) => (
                <Grid item xs={4} key={label}>
                  <Paper sx={{ p: 2, textAlign: "center", bgcolor: '#000', border: '1px solid #555' }}>
                    <Typography variant="h5">100</Typography>
                    <Typography variant="caption">{label}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Box mt={4}>
              <Switch color="default" />
              <Switch color="default" />
            </Box>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, bgcolor: '#000', border: '1px solid #555', textAlign: 'center' }}>
                  <Typography variant="caption">Scheduled Power Off at</Typography>
                  <Typography variant="h5">22:03</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper sx={{ p: 2, bgcolor: '#000', border: '1px solid #555', textAlign: 'center' }}>
                  <Typography variant="caption">Scheduled Cleaning</Typography>
                  <Typography variant="body2">From <strong>22:03</strong></Typography>
                  <Typography variant="body2">To <strong>22:03</strong></Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ bgcolor: "#111", p: 3, borderRadius: 4, textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>MARVIN gen 2</Typography>
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                border: '1px solid #ccc',
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <IconButton sx={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)' }}>
                <ArrowUpwardIcon sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                <ArrowDownwardIcon sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
                <ArrowBackIcon sx={{ color: '#fff' }} />
              </IconButton>
              <IconButton sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                <ArrowForwardIcon sx={{ color: '#fff' }} />
              </IconButton>
              <Typography>🤖</Typography>
            </Box>
            <Box mt={4} display="flex" justifyContent="center" gap={4}>
              <Button variant="contained">Auto</Button>
              <Button variant="contained">Manual</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ControlPanel;
