import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const Container = styled.div`
  width: 64rem;
  height: 20rem;
  background: #f2c94d url("/icons/captain-marvel.jpg") no-repeat right top;
  background-size: 39.375rem;
  border-radius: 0.625rem;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const H1 = styled.h1`
  font-size: 2.813rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0;
`;
const InfoText = styled.p`
  font-size: 1.125rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 400px;
`;

export function HeroBanner() {
  return (
    <BodyContainer>
      <Container>
        <TextWrapper>
          <H1>Captain Marvel</H1>
          <InfoText>
            When head of NASA security Carol Danvers was exposed to a powerful
            alien device, she transformed into the mighty cosmic powered hero,
            Captain Marvel!
          </InfoText>
        </TextWrapper>
      </Container>
    </BodyContainer>
  );
}
