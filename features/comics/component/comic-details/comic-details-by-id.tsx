import React from "react";
import styled from "styled-components";
import { PageButton } from "@features";
import { ComicDetailsProps } from "@features/comics/types/comic-types";
import { Routes } from "@config/routes";

export const ComicStyle = styled.div`
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.9);
  padding: 4rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 2rem 0;
`;

export const ComicTitle = styled.h1`
  margin-top: 0;
`;
export const SubComicTitle = styled.h3`
  padding: 1rem 0 0 0;
  margin: 0;
`;
export const CreatorStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Set the number of columns to 2
  grid-column-gap: 3.125rem;

  padding: 0 1.5rem 1.5rem 1.5rem;
`;
export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 2rem;
`;
export const Image = styled.img`
  margin-right: 0.5rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  box-shadow: 0px 50px 55px -51px rgba(148, 145, 148, 0.95);
`;
export const AdditionalDetails = styled.div`
  padding: 4rem;

  & > ${SubComicTitle} {
    padding-bottom: 1rem;
  }
`;

export const Variants = styled.li`
  list-style-type: none;
`;
export const VariantText = styled.p`
  color: #332c39;

  &:hover {
    color: #f2c94d;
  }
`;
export const Attribution = styled.p`
  color: #f1f1f1;
`;
export function ComicDetailsById({
  title,
  description,
  format,
  pageCount,
  thumbnail,
  images,
  variants,
  prices,
  creators,
  attributionText,
  copyright,
  series,
}: ComicDetailsProps) {
  const [{ price }] = prices;
  return (
    <>
      <ComicStyle>
        <PageButton label={"Go back"} href={Routes.characters} />
        <Wrapper>
          <Image
            src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
            alt={`${title}`}
          />
          <div>
            <TitleAndDescription>
              <ComicTitle>{title}</ComicTitle>
              {description ? <p>{description}</p> : "No available description"}
            </TitleAndDescription>
            <CreatorStyle>
              {creators?.items?.map((creator, index) => (
                <div key={index}>
                  <SubComicTitle>{creator.role}</SubComicTitle>
                  {creator.name}
                </div>
              ))}
              <p>Page Count: {pageCount}</p>
              <p>Format: {format}</p>
              <p>Price: ${price}</p>
            </CreatorStyle>
          </div>
        </Wrapper>
        <Attribution>{attributionText}</Attribution>
        <Attribution>Copyright {copyright}</Attribution>
      </ComicStyle>
      <AdditionalDetails>
        <SubComicTitle>Promotional Covers</SubComicTitle>
        {images?.map((image, index) => (
          <>
            <Image
              key={index}
              src={`${image.path}/portrait_xlarge.${image.extension}`}
              alt={`${title}`}
            />
          </>
        ))}
        <SubComicTitle>Issue Variants</SubComicTitle>
        {variants?.map((variant, index) => (
          <Variants key={index}>
            <VariantText>{variant.name}</VariantText>
          </Variants>
        ))}
        <SubComicTitle>Series</SubComicTitle>

        <Variants>
          <VariantText>{series?.name}</VariantText>
        </Variants>
      </AdditionalDetails>
    </>
  );
}
