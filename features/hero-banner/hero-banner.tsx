import React from "react";
import * as H from "./hero-banner.style";
import { PageContainer } from "@features/page-container";
import { PageButton } from "@features/ui";

export function HeroBanner() {
  return (
    <PageContainer>
      <H.BodyContainer>
        <H.Container>
          <H.TextWrapper>
            <H.H1>Captain Marvel</H.H1>
            <H.InfoText>
              When head of NASA security Carol Danvers was exposed to a powerful
              alien device, she transformed into the mighty cosmic powered hero,
              Captain Marvel!
            </H.InfoText>
            <PageButton href="/" label="Learn More!" />
          </H.TextWrapper>
        </H.Container>
      </H.BodyContainer>
    </PageContainer>
  );
}
