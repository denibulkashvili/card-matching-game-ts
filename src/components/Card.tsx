import React, { Fragment } from "react";
import { ICard } from "../interfaces";
import "./Card.css";

const Card: React.FC<ICard> = ({text}: ICard) => {
  return (
    <Fragment >
      <p className="card-text">{text}</p>
    </Fragment>
  );
};

export default Card;
