import React from "react";
import PowerButton from "./components/PowerButton";
import BotStatus from "./components/BotStatus";
function App(){
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold">MARVIN.v2 Control Panel</h1>
      <PowerButton />
      <BotStatus />
      </div>
      
  );
}
export default App;