import React from "react";
import * as A from "@features";
type HeroDetailsProps = {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  attributionText: string;
};
export function HeroInfo({
  name,
  description,
  attributionText,
  thumbnail,
}: HeroDetailsProps) {
  return (
    <>
      <A.Container>
        <A.Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name}`}
        />

        <A.InfoContainer>
          <A.HeroName>{name}</A.HeroName>
          <A.Description>{description}</A.Description>
          <A.ButtonWrapper style={{ paddingLeft: "1rem" }}>
            <A.PageButton href="/" label="Find Out More!" />
            <A.Attribution>{attributionText}</A.Attribution>
          </A.ButtonWrapper>
        </A.InfoContainer>
      </A.Container>
    </>
  );
}
