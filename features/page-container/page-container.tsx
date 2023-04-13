import React from "react";
import * as P from "./page-container.style";
import { SearchContainer } from "@features/search-container";

type PageProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageProps) {
  return (
    <>
      <header>
        <P.Skyline>
          <P.HeaderName data-cy="h1">MARVELOUS</P.HeaderName>
        </P.Skyline>
      </header>
      <SearchContainer />
      <P.Container>
        <P.Main>{children}</P.Main>
      </P.Container>
    </>
  );
}
