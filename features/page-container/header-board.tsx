import React from "react";
import styled from "@emotion/styled";

const Skyline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/icons/sky-line.png"),
    linear-gradient(
      to bottom,
      #163c52 0%,
      #4f4f47 30%,
      #c5752d 60%,
      #b7490f 80%,
      #2f1107 100%
    );
  background-size: contain, auto;
  background-position: bottom;
  background-repeat: repeat-x;
  min-height: 200px;

  @media (max-width: 52.125rem) {
    background-image: url("/icons/sky-line-small.png"),
      linear-gradient(
        to bottom,
        #163c52 0%,
        #4f4f47 30%,
        #c5752d 60%,
        #b7490f 80%,
        #2f1107 100%
      );
    background-size: contain, auto;
    background-position: bottom;
    background-repeat: repeat-x;
    min-height: 200px;
    font-size: 2rem;
  }
`;
export const HeaderName = styled.h1`
  font-size: 5rem;
  margin: 0;
  letter-spacing: 3px;
  transform: rotate(-5deg) skew(-10deg, 0);
  text-shadow: -1px -1px yellow, 1px 1px orange, 2px 2px orange;

  @media (max-width: 52.125rem) {
    font-size: 2rem;
  }
`;
export default function HeaderBoard() {
  return (
    <Skyline>
      <HeaderName data-cy="h1">MARVELOUS</HeaderName>
    </Skyline>
  );
}
