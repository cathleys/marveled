import React from "react";
import { PageButton } from "@features/ui";
import * as H from "./hero-page-card.style";
import { Routes } from "@config/routes";

type HeroPageCardProps = {
  src: string;
  alt: string;
  title: string;
  info: string;
};
export function HeroPageCard({ title, info, ...cardProps }: HeroPageCardProps) {
  return (
    <H.Card>
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
