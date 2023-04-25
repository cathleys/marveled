import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { ButtonWrapper, PageButton } from "@features";

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
const FrontCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
const FrontCard = styled.img`
  width: 15.125rem;
  height: 100%;
`;

const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15.125rem;
  height: 23rem;
  margin-bottom: 1rem;
  background: white;
  border: 3px solid black;
  border-radius: 0.5rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
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
          <FrontCardWrapper onMouseOver={handleMouseOver}>
            <FrontCard {...cardProps} />
          </FrontCardWrapper>

          <BackCard onMouseOut={handleMouseOver}>
            <TitleAndTextWrapper>
              <h2>Something</h2>
              <p>lorem ipsum</p>
            </TitleAndTextWrapper>
            <ButtonWrapper style={{ padding: "1rem" }}>
              <PageButton label="More Info" href={""} />
            </ButtonWrapper>
          </BackCard>
        </ReactCardFlip>
      </Container>
    </>
  );
}
