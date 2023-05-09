import React from "react";
import { Routes } from "@config/routes";
import { saveAs } from "file-saver";
import { PageButton } from "@features";
import { ComicDetailsProps } from "@features/comics/types/comic-types";
import * as C from "./comic-detail.style";

export function ComicDetailsById({
  attributionText,
  title,
  description,
  format,
  pageCount,
  thumbnail,
  images,
  variants,
  prices,
  creators,
  series,
  textObjects,
}: ComicDetailsProps) {
  const [{ price }] = prices;

  const handleDownloadClick = () => {
    const url = `${thumbnail.path}.${thumbnail.extension}`;
    saveAs(url, `${title}.${thumbnail.extension}`);
  };
  return (
    <>
      <C.ComicStyle>
        <PageButton label={"Go back"} href={Routes.character} />
        <C.Wrapper>
          <C.ImageButtonAndAttribution>
            <C.Image
              src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
              alt={`${title}`}
            />
            <C.Attribution>{attributionText}</C.Attribution>
            <PageButton
              label="Download Cover"
              href={`${thumbnail.path}.${thumbnail.extension}`}
              onClick={handleDownloadClick}
            />
          </C.ImageButtonAndAttribution>

          <div>
            <C.TitleAndDescription>
              <C.ComicTitle>{title}</C.ComicTitle>
              {description ? <p>{description}</p> : "No available description"}
            </C.TitleAndDescription>
            <C.CreatorStyle>
              {creators?.items?.map((creator, index) => (
                <div key={index}>
                  <C.SubComicTitle>{creator.role}</C.SubComicTitle>
                  {creator.name}
                </div>
              ))}
              <p>Page Count: {pageCount}</p>
              <p>Format: {format}</p>
              <p>Price: ${price}</p>
            </C.CreatorStyle>
          </div>
        </C.Wrapper>
      </C.ComicStyle>
      <C.AdditionalDetails>
        <C.SubComicTitle>Promotional Covers</C.SubComicTitle>
        {textObjects?.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
        {images?.map((image, index) => (
          <>
            <C.Image
              key={index}
              src={`${image.path}/portrait_xlarge.${image.extension}`}
              alt={`${title}`}
            />
          </>
        ))}
        <C.SubComicTitle>Issue Variants</C.SubComicTitle>
        {variants?.map((variant, index) => (
          <C.Variants key={index}>
            <C.VariantText>{variant.name}</C.VariantText>
          </C.Variants>
        ))}
        <C.SubComicTitle>Series</C.SubComicTitle>

        <C.Variants>
          <C.VariantText>{series?.name}</C.VariantText>
        </C.Variants>
      </C.AdditionalDetails>
    </>
  );
}
