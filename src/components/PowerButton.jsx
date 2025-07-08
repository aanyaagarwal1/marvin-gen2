// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import { db } from "../firebase";
// import { ref, set } from "firebase/database";
// export default function PowerButton() {
//   const [isOn, setIsOn] = useState(false);
//   const sendCommand = (command) => {
//         set(ref(db, "/marvinBot/command"), command)
//           .then(() => console.log("Command sent:", command))
//           .catch((error) => console.error("Error sending command:", error));
//   };
//   return (
//     <Button
//       variant={isOn ? "contained" : "outlined"}
//       color={isOn ? "success" : "error"}
//       startIcon={<PowerSettingsNewIcon />}
//       onClick={() => {
//         setIsOn(!isOn)
//         sendCommand("off");
//       }
//       }
//     >
//       {isOn ? "Power On" : "Power Off"}
//     </Button>
//   );
// }

 

import React, { useState } from "react";
import { Button } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

export default function PowerButton() {
  const [isOn, setIsOn] = useState(false);

  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };

  const handleClick = () => {
    const newPowerState = !isOn;
    setIsOn(newPowerState);
    sendCommand(newPowerState ? "auto" : "off");

  };

  return (
    <Button
      variant={isOn ? "contained" : "outlined"}
      color={isOn ? "success" : "error"}
      startIcon={<PowerSettingsNewIcon />}
      onClick={handleClick}
    >
      {isOn ? "Power On" : "Power Off"}
    </Button>
  );
}


// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import { db } from "../firebase";
// import { ref, set } from "firebase/database";

// export default function PowerButton() {
//   const [isOn, setIsOn] = useState(false);

//   const sendCommand = (commands) => {
//     set(ref(db, "/marvinBot/command"), commands)
//       .then(() => console.log("Command sent:", commands))
//       .catch((error) => console.error("Error sending command:", error));
//   };

//   const handleClick = () => {
//     const newPowerState = !isOn;
//     setIsOn(newPowerState);

//     if (newPowerState) {
//       sendCommand({ power: "on", mode: "auto" });
//     } else {
//       sendCommand({ power: "off" });
//     }
//   };

//   return (
//     <Button
//       variant={isOn ? "contained" : "outlined"}
//       color={isOn ? "success" : "error"}
//       startIcon={<PowerSettingsNewIcon />}
//       onClick={handleClick}
//     >
//       {isOn ? "Power On" : "Power Off"}
//     </Button>
//   );
// }
