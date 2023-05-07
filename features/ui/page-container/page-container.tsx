import React, { useContext } from "react";
import Head from "next/head";
import * as P from "./page-container.style";
import {
  SearchContainer,
  ThemeContext,
  Footer,
  useCompleteCharacters,
} from "@features";
import HeaderBoard from "./header-board";

type PageProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageProps) {
  const { isDarkMode } = useContext(ThemeContext);
  const {
    data: { copyright },
  } = useCompleteCharacters();
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
      <SearchContainer />
      <P.Container isDark={isDarkMode}>
        <P.Main>{children}</P.Main>
      </P.Container>
      <Footer copyright={copyright} />
    </>
  );
}
