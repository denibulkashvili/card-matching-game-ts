import React, { createContext, useReducer } from "react";
import initialCards from "./cards/cards";
import { IAction, IState } from "./interfaces";

const initialState: IState = {
  cards: initialCards,
  isGameRunning: false,
  matchedCards: [],
  revealedCards: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "TOGGLE_GAME_STATE":
      return { ...state, isGameRunning: action.payload };
    case "RESET_GAME":
      return { ...state, matchedCards: [], revealedCards: [], isGameRunning: action.payload };
    case "REVEAL_CARD":
      return { ...state, revealedCards: [...state.revealedCards, action.payload] };
    case "HANDLE_UNMATCHED_CARDS":
      return { ...state, revealedCards: [] };
    case "HANDLE_MATCHED_CARDS":
      return { ...state, matchedCards: [...state.matchedCards, ...action.payload], revealedCards: [] };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
};
