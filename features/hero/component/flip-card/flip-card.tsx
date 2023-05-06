import React, { SyntheticEvent, useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { ButtonWrapper, PageButton, ThemeContext } from "@features";
import * as F from "@features/ui/card/flip-card.style";
import { Routes } from "@config/routes";

type FlipCardProps = {
  id: number;
  title: string;
  variantDescription: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function FlipCard({
  id,
  title,
  variantDescription,
  thumbnail,
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const handleMouseOver = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsHovered(!isHovered);
  };

  return (
    <>
      <F.Container>
        <ReactCardFlip isFlipped={isHovered} flipDirection="horizontal">
          <F.FrontCardWrapper isDark={isDarkMode} onMouseOver={handleMouseOver}>
            <F.FrontCard
              src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
              alt={`${variantDescription}`}
            />
          </F.FrontCardWrapper>

          <F.BackCard onMouseOut={handleMouseOver}>
            <F.TitleAndTextWrapper>
              <h2>{title}</h2>
              <p>{variantDescription}</p>
            </F.TitleAndTextWrapper>
            <ButtonWrapper style={{ padding: "1rem" }}>
              <PageButton
                label="More Info"
                href={{
                  pathname: Routes.comicDetails,
                  query: { comicId: id },
                }}
              />
            </ButtonWrapper>
          </F.BackCard>
        </ReactCardFlip>
      </F.Container>
    </>
  );
}
