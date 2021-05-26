import * as React from 'react';
import styled from 'styled-components';
import { border, suits, values } from './cards';
import { CardValueTypes, CardSuitTypes } from './types';
import { black, red } from './tokens';

type Props = {
  suit: CardSuitTypes;
  value: CardValueTypes;
  height?: number;
};

const Card: React.FC<Props> = ({ height = 100, suit, value }) => {
  const svg = border + values[value] + suits[suit];

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 40 50"
      xmlSpace="preserve"
      dangerouslySetInnerHTML={{ __html: svg }}
      height={height}
      color={suit === 'diamonds' || suit === 'hearts' ? red : black}
    />
  );
};

export default Card;

const StyledSvg = styled.svg`
  height: ${props => props.height}px;
  vertical-align: middle;

  .suit,
  .value {
    fill: ${props => props.color};
  }
`;
