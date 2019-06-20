import { ICard } from "../interfaces";

const initialCards: ICard[] = [
  { text: "JavaScript", id: 1 },
  { text: "Python", id: 2 },
  { text: "Java", id: 3 },
  { text: "C#", id: 4 },
  { text: "PHP", id: 5 },
  { text: "BrainFuck", id: 6 },
];

const copyCards = (cards: ICard[]): ICard[] => {
  const lenCards: number = cards.length;
  const tempCards: any = cards.map((card: ICard) => {
    return {text: card.text, id: card.id + lenCards};
  });
  return [...cards, ...tempCards];
};

const shuffleCards = (cards: ICard[]): ICard[] => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return [...cards];
};

export default shuffleCards(copyCards(initialCards));
