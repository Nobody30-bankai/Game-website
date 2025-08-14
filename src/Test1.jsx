import React ,{useState} from "react";

function Rockpaper(){

  const [mode, setMode] = React.useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
   const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
  };

  const handlePlayerMove = (choice) => {
    setPlayerChoice(choice);

    if (mode === 'computer') {
      const choices = ['rock', 'paper', 'scissors'];
      const compChoice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(compChoice);

      if (choice === compChoice) {
        setResult("It's a draw!");
      } else if (
        (choice === 'rock' && compChoice === 'scissors') ||
        (choice === 'paper' && compChoice === 'rock') ||
        (choice === 'scissors' && compChoice === 'paper')
      ) {
        setResult('You win!');
      } else {
        setResult('Computer wins!');
      }
    }

    const handlePlayerMoveVsPlayer = (playerNum, choice) => {
    if (playerNum === 1) {
      setPlayerChoice(choice);
    } else {
      setPlayerTwoChoice(choice);
    }
  };
   return (
    <div>
      {!mode && (
        <>
          <h2 className="mode" >Choose Game Mode</h2>
          <button className="mybutton" onClick={() => handleSelectMode('computer')}>
            Play with Computer
          </button>
          <button className="mybutton" onClick={() => handleSelectMode('player')}>
            Play with Another Player
          </button>
          </>
      )}
      {mode && (
        <>
          <h2>Welcome to Rock Paper Scissors game</h2>
          <p className="mode">Mode: {mode}</p>

          {/* Game choices */}
          <div>
            <button className="Button" onClick={() => handlePlayerMove('rock')}>Rock</button>
            <button className="Button" onClick={() => handlePlayerMove('paper')}>Paper</button>
            <button className="Button" onClick={() => handlePlayerMove('scissors')}>Scissors</button>
          </div>

          
          
              {mode === 'computer' && (
                <>
                  {playerChoice && <p> Your choice : {playerChoice}</p>}
                  {computerChoice && <p> computer's choice : {computerChoice}</p>}
                  {result && <p>Result: {result}</p>}
                </>
              )}
          
        </>
      )}
      {mode === 'player' && (
            <>
              <h3>Player 1</h3>
              <button onClick={() => handlePlayerMoveVsPlayer(1, 'rock')}>Rock</button>
              <button onClick={() => handlePlayerMoveVsPlayer(1, 'paper')}>Paper</button>
              <button onClick={() => handlePlayerMoveVsPlayer(1, 'scissors')}>Scissors</button>

              <h3>Player 2</h3>
              <button onClick={() => handlePlayerMoveVsPlayer(2, 'rock')}>Rock</button>
              <button onClick={() => handlePlayerMoveVsPlayer(2, 'paper')}>Paper</button>
              <button onClick={() => handlePlayerMoveVsPlayer(2, 'scissors')}>Scissors</button>

              {playerChoice && <p>Player 1 choice: {playerChoice}</p>}
              {playerTwoChoice && <p>Player 2 choice: {playerTwoChoice}</p>}
              {result && <h3>{result}</h3>}
               </>
          )}
    </div>
   )}
}
export default Rockpaper;