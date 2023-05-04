import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ThemeContext } from "@features";

const Skyline = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/icons/sky-line.png"),
    ${({ isDark }) =>
      isDark
        ? `linear-gradient(180deg, rgba(0,0,0,1) 22%, rgba(30,0,55,1) 83%, rgba(38,36,40,1) 100%)`
        : `linear-gradient(
    to bottom,
    #163c52 0%,
    #4f4f47 30%,
    #c5752d 60%,
    #b7490f 80%,
    #2f1107 100%
  )`};

  background-size: contain, auto;
  background-position: bottom;
  background-repeat: repeat-x;
  min-height: 200px;

  @media (max-width: 64em) {
    background-image: url("/icons/sky-line-small.png"),
      ${({ isDark }) =>
        isDark
          ? `linear-gradient(180deg, rgba(0,0,0,1) 22%, rgba(30,0,55,1) 83%, rgba(38,36,40,1) 100%)`
          : `linear-gradient(
    to bottom,
    #163c52 0%,
    #4f4f47 30%,
    #c5752d 60%,
    #b7490f 80%,
    #2f1107 100%
  )`};
  }
`;
export const HeaderName = styled.h1<{ isDark: boolean }>`
  font-size: 5rem;
  margin: 0;
  letter-spacing: 3px;
  transform: rotate(-5deg) skew(-10deg, 0);
  text-shadow: -1px -1px yellow, 1px 1px orange, 2px 2px orange;
  color: ${({ isDark }) => (isDark ? "#6E260E" : "black")};

  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;
export default function HeaderBoard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Skyline isDark={isDarkMode}>
      <HeaderName isDark={isDarkMode} data-cy="h1">
        MARVELED
      </HeaderName>
    </Skyline>
  );
}
