import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Heading } from "../App";
import initialCards from "../cards/cards";
import { ICard } from "../interfaces";
import Card from "./Card";

interface ISingleCardWrapperProps {
  isRevealed: boolean;
}

const CardSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const SingleCardWrapper = styled.div<ISingleCardWrapperProps>`
  justify-self: center;
  width: 100%;
  height: 150px;
  border: solid 1px black;
  text-align: center;
  border: 1px solid teal;

  background: ${(props) => props.isRevealed ? "teal" : ""};
  color: ${(props) => props.isRevealed ? "white" : ""};
`;

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
    <>
      <Heading>Click cards to match two of the same kind</Heading>
      <CardSectionWrapper>
        {cards.map((card: ICard) => (
          <SingleCardWrapper
            key={card.id}
            onClick={() => revealCard(card)}
            isRevealed = {isInArray(card, revealedCards) || isInArray(card, matchedCards)}
          >
            <Card
              text={
                isInArray(card, revealedCards) || isInArray(card, matchedCards)
                  ? card.text
                  : ""
              }
              id={card.id}
            />
          </SingleCardWrapper>
        ))}
      </CardSectionWrapper>
    </>
  );
};

export default GameBoard;
