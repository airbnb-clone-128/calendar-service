import React from 'react';
import styled from 'styled-components';

const ArrowSVG = styled.svg`
  height: 12px;
  width: 12px;
  display: block;
  fill: black;
`;

const RightArrowSVG = () => (
  <ArrowSVG viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
  </ArrowSVG>
);

export default RightArrowSVG;
