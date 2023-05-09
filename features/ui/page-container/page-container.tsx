import React, { useContext } from "react";
import Head from "next/head";
import * as P from "./page-container.style";
import * as C from "@features";
import HeaderBoard from "./header-board";

type PageProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageProps) {
  const { isDarkMode } = useContext(C.ThemeContext);
  const { data } = C.useCompleteCharacters();
  const { copyright } = data || {};
  return (
    <>
      <Head>
        <title>Marveled</title>
        <meta name="description" content="Marvel Hero Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderBoard />
      </header>
      <C.SearchContainer />
      <P.Container isDark={isDarkMode}>
        <P.Main>{children}</P.Main>
      </P.Container>
      <C.Footer copyright={copyright} />
    </>
  );
}
