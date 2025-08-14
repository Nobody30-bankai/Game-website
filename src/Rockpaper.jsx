import React, { useState } from 'react';

function Rockpaper() {
  const [mode, setMode] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleSelectMode = (selectedMode) => {
    setMode(selectedMode);
  };

  
  const resetGame = () => {
    setMode(null);
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerTwoChoice(null);
    setResult('');
  };

  
  const handlePlayerMoveVsComputer = (choice) => {
    setPlayerChoice(choice);

    const choices = ['rock 🪨', 'paper 📃', 'scissors ✂️'];
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
  };

  const handlePlayerMoveVsPlayer = (playerNum, choice) => {
  let p1Choice = playerChoice;
  let p2Choice = playerTwoChoice;

  if (playerNum === 1) {
    p1Choice = choice;
    setPlayerChoice(choice);
  } else {
    p2Choice = choice;
    setPlayerTwoChoice(choice);
  }

  
  if (p1Choice && p2Choice) {
    if (p1Choice === p2Choice) {
      setResult("It's a draw!");
    } else if (
      (p1Choice === 'rock' && p2Choice === 'scissors') ||
      (p1Choice === 'paper' && p2Choice === 'rock') ||
      (p1Choice === 'scissors' && p2Choice === 'paper')
    ) {
      setResult('Player 1 wins!');
    } else {
      setResult('Player 2 wins!');
    }
  }
};


  return (
    <div>
      {!mode && (
        <>
          <h2 className='mode'>Choose Game Mode</h2>
          <button className='mybutton' onClick={() => handleSelectMode('computer')}>
            Play with Computer
          </button>
          <button className='mybutton' onClick={() => handleSelectMode('player')}>
            Play with Another Player
          </button>
        </>
      )}

      {mode && (
        <>
          <h2>Welcome to Rock Paper Scissors game</h2>
          <p className='mode'>Mode: {mode}</p>

          {mode === 'computer' && (
            <>
              <button className='mybutton' onClick={() => handlePlayerMoveVsComputer('rock')}>Rock</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsComputer('paper')}>Paper</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsComputer('scissors')}>Scissors</button>

              {playerChoice && <p>Your choice: {playerChoice}</p>}
              {computerChoice && <p>Computer's choice: {computerChoice}</p>}
              {result && <h3>{result}</h3>}
            </>
          )}

          {mode === 'player' && (
            <>
              <h3>Player 1</h3>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(1, 'rock')}>Rock</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(1, 'paper')}>Paper</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(1, 'scissors')}>Scissors</button>

              <h3>Player 2</h3>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(2, 'rock')}>Rock</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(2, 'paper')}>Paper</button>
              <button className='mybutton' onClick={() => handlePlayerMoveVsPlayer(2, 'scissors')}>Scissors</button>

              {playerChoice && <p className='Player'>Player 1 choice: {playerChoice}</p>}
              {playerTwoChoice && <p className='Player'>Player 2 choice: {playerTwoChoice}</p>}
              {result && <h3>{result}</h3>}
            </>
          )}

          
          {(result || playerChoice || playerTwoChoice) && (
            <button className='mybutton' onClick={resetGame} >
              Reset Game
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Rockpaper;
