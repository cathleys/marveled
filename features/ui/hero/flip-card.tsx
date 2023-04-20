import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { PageButton } from "@features";
import { ButtonWrapper } from "@features/hero-page-card";

type FlipCardProps = {
  src: string;
  alt: string;
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;

const TitleAndTextWrapper = styled.div`
  padding: 1rem;
`;

const FrontCard = styled.img`
  width: 15.125rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;

const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15.125rem;
  height: 22.88rem;
  margin-bottom: 1rem;
  background: white;
  border: 3px solid black;
  border-radius: 0.5rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
const ButtonStyle = styled(ButtonWrapper)`
  padding: 1rem;
`;
export function FlipCard({ ...cardProps }: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsHovered(!isHovered);
  };

  return (
    <>
      <Container>
        <ReactCardFlip isFlipped={isHovered} flipDirection="horizontal">
          <FrontCard {...cardProps} onMouseOver={handleMouseOver} />

          <BackCard onMouseOver={handleMouseOver}>
            <TitleAndTextWrapper>
              <h2>Something</h2>
              <p>lorem ipsum</p>
            </TitleAndTextWrapper>
            <ButtonStyle>
              <PageButton label="More Info" href={""} />
            </ButtonStyle>
          </BackCard>
        </ReactCardFlip>
      </Container>
    </>
  );
}
