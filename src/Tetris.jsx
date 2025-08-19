 import React from 'react';
 import './Tetris.css';

 function Tetris() {
   return (
    <>
    <div>
      <h1 className='text'>hello welcome to <span>Tetris game</span></h1>
      <div className="tetris-container">
      <div className="tetris-grid">
        {Array(15).fill().map((_, rowIndex) => (
          <div key={rowIndex} className="tetris-row">
            {Array(10).fill().map((_, colIndex) => (
              <div key={colIndex} className="tetris-cell"></div>
            ))}
          </div>
        ))}
      </div>
      </div>
      <h2>Score: 0</h2>
    </div>
    </>
    
   )
  
 }

 export default Tetris;








