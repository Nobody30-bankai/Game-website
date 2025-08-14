import React from "react";

function Gameboard() {

  const [mode, setMode] = React.useState(null);

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
    console.log(`You are playing with: ${selectedMode}`);
  };
  return (
    <div>
      {!mode && (
        <>
          <h2>Choose Game Mode</h2>
          <button onClick={() => handleSelectMode('computer')}>
            Play with Computer
          </button>
          <button onClick={() => handleSelectMode('player')}>
            Play with Another Player
          </button>
        </>
      )}

      {mode && (
        <>
          <h2>Welcome to the Gameboard</h2>
          <p>Mode: {mode}</p>
        </>
      )}
    </div>
  )
}
export default Gameboard;