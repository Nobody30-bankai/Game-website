import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
//import Gameboard from "./Gameboard";
import Tetris from "./Tetris";
import Rockpaper from "./Rockpaper";
import "./Home.css";
import Home from "./Home";
import Tictactoe from "./Tictactoe";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tetris" element={<Tetris />} />
            <Route path="/rockpaper" element={<Rockpaper />} />
            <Route path="/Tictactoe" element={<Tictactoe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
