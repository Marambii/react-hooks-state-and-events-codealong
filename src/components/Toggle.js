import React, { useState } from "react";

function Toggle() {
const [isOn, setIsON] = useState(false);
function handleClick(){
  setIsON((isOn) => !isOn);
}
const color = isOn ? 'green': 'red';

  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
