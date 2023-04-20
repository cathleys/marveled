import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

type FlipCardProps = {
  src: string;
  alt: string;
};
const CardFlip = styled(ReactCardFlip)``;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;
const BackCard = styled.div`
  width: 15.125rem;
  height: 22.88rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
const FrontCard = styled.img`
  width: 15.125rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
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
        <CardFlip isFlipped={isHovered} flipDirection="horizontal">
          <FrontCard {...cardProps} onMouseOver={handleMouseOver} />
          <BackCard onMouseOver={handleMouseOver}></BackCard>
        </CardFlip>
      </Container>
    </>
  );
}
