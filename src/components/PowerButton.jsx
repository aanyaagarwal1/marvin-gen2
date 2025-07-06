import React, { useState } from "react";
import { Button } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function PowerButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <Button
      variant={isOn ? "contained" : "outlined"}
      color={isOn ? "success" : "error"}
      startIcon={<PowerSettingsNewIcon />}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? "Power On" : "Power Off"}
    </Button>
  );
}
