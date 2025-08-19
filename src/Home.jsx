import { Link } from "react-router-dom";
import  './Home.css'; 
 import tictactoe from './tictactoe.png'
 import tetris from './tetris.png'
 import rock from './rockpaperscissors.png'

function Home() {
  return (
    <div className="card-container">
      <Link to="/Tictactoe" className="tic">
      <img className='image' src={tictactoe} alt="Tic Tac Toe" />
        <h2 className="title">Tic Tac Toe</h2>
        <p className="text">Play Tic Tac Toe and challenge your friends!</p>
      </Link>

      <Link to="/tetris" className="card">
      <img className='image' src={tetris} alt="Tetris Game" />
        <h2 className="title">Tetris</h2>
        <p className="text" >Arrange blocks and clear rows in this classic puzzle.</p>
      </Link>

      <Link to="/rockpaper" className="card">
      <img className='image' src={rock} alt="Tic Tac Toe" />
        <h2 className="title">Rock Paper Scissors</h2>
        <p className="text">Beat the computer or your friend in Rock Paper Scissors!</p>
      </Link>
    </div>
  );
}

export default Home;
