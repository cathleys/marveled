import React, { useContext } from "react";
import { PageButton, ThemeContext } from "@features";
import * as H from "./home-card.style";
import { Routes } from "@config/routes";

type HeroPageCardProps = {
  src: string;
  alt: string;
  title: string;
  info: string;
};
export function HomeCard({ title, info, ...cardProps }: HeroPageCardProps) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <H.Card isDark={isDarkMode}>
      <div>
        <H.Image {...cardProps} />
      </div>
      <H.TextandButtonWrapper>
        <h2>{title}</h2>
        <p>{info}</p>
      </H.TextandButtonWrapper>
      <H.ButtonWrapper>
        <PageButton href={Routes.home} label="Find Out More!" />
      </H.ButtonWrapper>
    </H.Card>
  );
}
