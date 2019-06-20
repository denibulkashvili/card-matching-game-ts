import React, { Fragment, useContext, useEffect } from "react";
import { IAction, ICard, IState } from "../interfaces";
import { Store } from "../Store";
import Card from "./Card";

const GameBoard = (props: IState): JSX.Element => {

  const {state, dispatch} = useContext(Store);

  const compareRevealedCards = (): boolean => {
    let revealedCardsMatched: boolean = false;
    if (state.revealedCards.length === 2) {
      if (state.revealedCards[0].text === state.revealedCards[1].text) {
        revealedCardsMatched = true;
      }
    }
    return revealedCardsMatched;
  };

  const flipCard = (card: ICard): IAction => {
    let dispatchObj: IAction = {
      payload: card,
      type: "",
    };
    // if there's already 1 card revealed cards
    if (state.revealedCards.length === 0) {
      dispatchObj = {
        payload: card,
        type: "REVEAL_CARD",
      };
    }
    if (state.revealedCards.length === 1 && !state.revealedCards.includes(card)) {
      // reveal
      dispatchObj = {
        payload: card,
        type: "REVEAL_CARD",
      };
    }
    if (state.revealedCards.length === 2) {
      const isMatched: boolean = compareRevealedCards();
      console.log(isMatched);
      if (isMatched) {
        console.log("and they are mached");
        console.log();
        dispatchObj = {
          payload: [...state.revealedCards],
          type: "HANDLE_MATCHED_CARDS",
        };
      } else {
        console.log("but they are not matched");
        dispatchObj = {
          payload: [],
          type: "HANDLE_UNMATCHED_CARDS",
        };
      }
    }
    return dispatch(dispatchObj);
  };

  const isCardTextVisisble = (card: ICard): boolean => {
    return state.matchedCards.includes(card) || state.revealedCards.includes(card);
  };
  console.log("Revealed:");
  console.log(state.revealedCards);
  console.log("Matched:");
  console.log(state.matchedCards);
  return (
    <Fragment>
      <h3>Click cards to match two of the same kind</h3>
      <section className="cards-section">
        {props.cards.map((card: ICard, index: number) => (
          <Fragment key={index} >
            <div onClick={() => flipCard(card)} className="card" >
              <Card text={isCardTextVisisble(card) ? card.text : ""} id={card.id} />
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default GameBoard;
