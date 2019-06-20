
export interface IState {
  isGameRunning: boolean;
  cards: ICard[];
  revealedCards: ICard[];
  matchedCards: ICard[];
}

export interface ICard {
  text: string;
  id: number;
  onClick?: any;
}

export interface IAction {
  type: string;
  payload: any;
}
export interface IGameBoard {
  gameState: string;
}
