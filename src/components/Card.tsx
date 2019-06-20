import React, { Fragment } from "react";
import { ICard } from "../interfaces";
import "./Card.css";

const Card = (props: ICard): JSX.Element => {
  return (
    <Fragment >
      <p className="card-text">{props.text}</p>
    </Fragment>
  );
};

export default Card;
