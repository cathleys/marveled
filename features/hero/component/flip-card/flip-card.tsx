import React, { SyntheticEvent, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { ButtonWrapper, PageButton } from "@features";
import * as F from "@features/ui/card/flip-card.style";

type FlipCardProps = {
  title: string;
  variantDescription: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function FlipCard({
  title,
  variantDescription,
  thumbnail,
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsHovered(!isHovered);
  };

  return (
    <>
      <F.Container>
        <ReactCardFlip isFlipped={isHovered} flipDirection="horizontal">
          <F.FrontCardWrapper onMouseOver={handleMouseOver}>
            <F.FrontCard
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={`${variantDescription}`}
            />
          </F.FrontCardWrapper>

          <F.BackCard onMouseOut={handleMouseOver}>
            <F.TitleAndTextWrapper>
              <h2>{title}</h2>
              <p>{variantDescription}</p>
            </F.TitleAndTextWrapper>
            <ButtonWrapper style={{ padding: "1rem" }}>
              <PageButton label="More Info" href={""} />
            </ButtonWrapper>
          </F.BackCard>
        </ReactCardFlip>
      </F.Container>
    </>
  );
}
