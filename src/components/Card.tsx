import React from "react";
import styled from "styled-components";
import { ICard } from "../interfaces";

const Text = styled.p`
  margin-top: 60px;
`;

const Card: React.FC<ICard> = ({text}: ICard) => {
  return <Text>{text}</Text>;
};

export default Card;
