import React, { useContext } from "react";
import * as H from "./home-banner.style";
import { PageButton, ThemeContext } from "@features/ui";
import { Routes } from "@config/routes";

export function HomeBanner() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <H.BodyContainer>
      <H.Container isDark={isDarkMode}>
        <H.TextWrapper>
          <H.H1>Captain Marvel</H.H1>
          <H.InfoText>
            When head of NASA security Carol Danvers was exposed to a powerful
            alien device, she transformed into the mighty cosmic powered hero,
            Captain Marvel!
          </H.InfoText>
          <PageButton
            href={{
              pathname: Routes.characterDetails,
              query: { id: 1010338 },
            }}
            label="Learn More!"
          />
        </H.TextWrapper>
      </H.Container>
    </H.BodyContainer>
  );
}
