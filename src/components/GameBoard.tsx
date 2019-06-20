import React, { Fragment, useEffect, useState } from "react";
import initialCards from "../cards/cards";
import { ICard } from "../interfaces";
import Card from "./Card";

const GameBoard: React.FC = () => {

  const [ cards, setNewCards ] = useState<ICard[]>(initialCards);

  const [ revealedCards, setRevealedCards ] = useState<ICard[]>([]);
  const [ matchedCards, setMatchedCards ] = useState<ICard[]>([]);

  const isInArray = (card: ICard, array: ICard[]): boolean => {
    return array.includes(card);
  };

  const revealCard = (card: ICard) => {
    if (!isInArray(card, revealedCards) && revealedCards.length < 2) {
      setRevealedCards([...revealedCards, card]);
    }
  };

  useEffect(() => {
    if (revealedCards.length === 2) {
      if (revealedCards[0].text === revealedCards[1].text) {
        setMatchedCards([...matchedCards, ...revealedCards]);
        setRevealedCards([]);
      } else {
        setTimeout(() => {
          setRevealedCards([]);
        }, 1500);

      }
    }
  }, [revealedCards.length]);

  return (
    <Fragment>
      <h3>Click cards to match two of the same kind</h3>
      <section className="cards-section">
        {cards.map((card: ICard) => (
          <Fragment key={card.id} >
            <div onClick={() => revealCard(card)} className="card" >
              <Card
                text={isInArray(card, revealedCards) || isInArray(card, matchedCards)
                  ? card.text
                  : ""
                }
                id={card.id}
              />
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default GameBoard;
