import React, { useContext } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { IAction, IState } from "./interfaces";
import { Store } from "./Store";

const App: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  const handleClick = (): IAction => {
    let dispatchObj = {
      payload: !state.isGameRunning,
      type: "TOGGLE_GAME_STATE",
    };
    if (state.isGameRunning) {
      dispatchObj = {
        payload: !state.isGameRunning,
        type: "RESET_GAME",
      };
    }
    return dispatch(dispatchObj);
  };

  const props: IState = {
    cards: state.cards,
    isGameRunning: state.isGameRunning,
    matchedCards: [],
    revealedCards: [],
  };

  return (
    <div className="App">
      {state.isGameRunning ? <GameBoard {...props} /> : <h3>Click "Start" to run the game</h3>}
      <div>
        <button onClick={handleClick} id="game-button">
          {state.isGameRunning ? <b>Stop</b> : <b>Start</b>}
        </button>
      </div>
    </div>
  );
};

export default App;
