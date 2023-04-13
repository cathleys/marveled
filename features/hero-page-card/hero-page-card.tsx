import React from "react";
import { PageButton } from "@features/ui";
import * as H from "./hero-page-card.style";

type HeroPageCardProps = {
  src: string;
  alt: string;
};
export function HeroPageCard({ src, alt }: HeroPageCardProps) {
  return (
    <H.Card>
      <div>
        <H.Image src={src} alt={alt} />
      </div>
      <H.TextandButtonWrapper>
        <h2>Captain Marvel Vol. 1: Rise of Alpha Flight</h2>
        <p>
          Oh Captain, my Captain! Carol Danvers soars higher than ever with her
          greatest mission yet — leading Earth’s first line of defense, the
          all-new Alpha Flight space program!
        </p>
      </H.TextandButtonWrapper>
      <H.ButtonWrapper>
        <PageButton href="/" label="Find Out More!" />
      </H.ButtonWrapper>
    </H.Card>
  );
}
