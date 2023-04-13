import React from "react";
import styled from "@emotion/styled";
import { Container, Main } from "./page-container.style";
import { SearchContainer } from "@features/search-container";

type PageProps = {
  children: React.ReactNode;
};

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
`;
const HeaderName = styled.h1`
  font-size: 5rem;
  margin: 0;
  letter-spacing: 3px;
  transform: rotate(-5deg) skew(-10deg, 0);
  text-shadow: -2px -2px yellow, 2px 2px orange, 3px 3px orange;

  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;
export function PageContainer({ children }: PageProps) {
  return (
    <>
      <header>
        <Skyline>
          <HeaderName data-cy="h1">MARVELOUS</HeaderName>
        </Skyline>
      </header>
      <SearchContainer />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
}
