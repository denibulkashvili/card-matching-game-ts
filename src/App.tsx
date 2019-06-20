import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {

  const [gameStateRunning, setGameState] = useState(false);

  const toggleGameState = (): void => setGameState(!gameStateRunning);

  return (
    <div className="App">
      {gameStateRunning ? <GameBoard /> : <h3>Click "Start" to run the game</h3>}
      <div>
        <button onClick={toggleGameState} id="game-button">
          {gameStateRunning ? <b>Stop</b> : <b>Start</b>}
        </button>
      </div>
    </div>
  );
};

export default App;
