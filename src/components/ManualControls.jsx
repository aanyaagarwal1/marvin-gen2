import React from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase.js"; // adjust the path as needed

export default function ControlPanel() {
  const sendCommand = (command) => {
    set(ref(db, "/marvinBot/command"), command)
      .then(() => console.log("Command sent:", command))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    <div>
      <button onClick={() => sendCommand("forward")}>Forward</button>
      <button onClick={() => sendCommand("backward")}>Backward</button>
      <button onClick={() => sendCommand("left")}>Left</button>
      <button onClick={() => sendCommand("right")}>Right</button>
      {/* <button onClick={() => sendCommand("auto")}>Auto</button>
      <button onClick={() => sendCommand("manual")}>Manual</button> */}
    </div>
  );
}
