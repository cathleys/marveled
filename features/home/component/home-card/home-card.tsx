import React, { useContext } from "react";
import { Routes } from "@config/routes";
import { PageButton, ThemeContext } from "@features";
import * as H from "./home-card.style";

type HeroPageCardProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  info: string;
};
export function HomeCard({ title, info, id, ...cardProps }: HeroPageCardProps) {
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
        <PageButton
          href={{
            pathname: Routes.comicDetails,
            query: { comicId: id },
          }}
          label="Find Out More!"
        />
      </H.ButtonWrapper>
    </H.Card>
  );
}
