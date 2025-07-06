import React from "react";
import PowerButton from "./components/PowerButton";
import BotStatus from "./components/BotStatus.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
function App(){
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold">MARVIN.v2 Control Panel</h1>
      <PowerButton />
      <BotStatus />
      <ControlPanel />
      </div>
      
  );
}
export default App;