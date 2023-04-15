import React from "react";
import * as P from "./page-container.style";
import { SearchContainer } from "@features";
import HeaderBoard from "./header-board";

type PageProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageProps) {
  return (
    <>
      <header>
        <HeaderBoard />
      </header>
      <SearchContainer />
      <P.Container>
        <P.Main>{children}</P.Main>
      </P.Container>
    </>
  );
}
