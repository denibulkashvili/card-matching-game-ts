import React, { useState } from "react";
import styled from "styled-components";
import GameBoard from "./components/GameBoard";

const AppWrapper = styled.div`
  text-align: center;
  width: 90%;
  display: block;
  margin: 0 auto;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  margin-top: 5px;
  font-size: 1.2rem;
  border: 2px solid teal;
  color: white;
  background: teal;

  :hover{
    color: teal;
    background: white;
    border: 2px solid teal;
  }
`;

const App: React.FC = () => {

  const [gameStateRunning, setGameState] = useState(false);

  const toggleGameState = (): void => setGameState(!gameStateRunning);

  return (
    <AppWrapper>
      { gameStateRunning
        ? <GameBoard />
        : <Heading>Click "Start" to run the game</Heading>
      }
      <Button onClick={toggleGameState} id="game-button">
        {gameStateRunning ? <b>Stop</b> : <b>Start</b>}
      </Button>
    </AppWrapper>
  );
};

export default App;
