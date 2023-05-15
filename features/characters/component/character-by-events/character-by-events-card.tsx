import React, { useContext } from "react";
import * as C from "@features";
import Link from "next/link";
import styled from "styled-components";
import { Routes } from "@config/routes";

export const CharacterWrapper = styled.div<{ isDark: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Set the number of columns to 2
  grid-gap: 10px;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  padding: 2rem;
  border: 3px solid ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  border-radius: 0.625rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
  font-size: 1rem;
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};

  @media (max-width: 64em) {
    padding: 0.5rem;
  }
`;
export function CharacterByEventsCard({
  title,
  description,
  thumbnail,
  attributionText,
  characters,
  series,
}: C.CharacterByEventsCardProps) {
  const { isDarkMode } = useContext(C.ThemeContext);

  return (
    <>
      <C.Container>
        <C.Image
          isDark={isDarkMode}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${title}`}
        />

        <C.InfoContainer isDark={isDarkMode}>
          <C.HeroName>{title}</C.HeroName>

          {description ? (
            <C.Description>{description}</C.Description>
          ) : (
            <C.Description>No available description</C.Description>
          )}
          <C.ButtonWrapper style={{ paddingLeft: "1rem" }}>
            <C.Attribution>{attributionText}</C.Attribution>
          </C.ButtonWrapper>
        </C.InfoContainer>
      </C.Container>

      <C.AZHeader isDark={isDarkMode}>Characters Involved</C.AZHeader>
      <CharacterWrapper isDark={isDarkMode}>
        {characters?.items?.map((character) => (
          <Link
            key={character.name}
            href={{
              pathname: Routes.character,
              query: { nameStartsWith: character.name },
            }}
            style={{ textDecoration: "none" }}
          >
            <C.List isDark={isDarkMode}>{character.name}</C.List>
          </Link>
        ))}
      </CharacterWrapper>

      <C.AZHeader isDark={isDarkMode}>Series</C.AZHeader>
      <CharacterWrapper isDark={isDarkMode}>
        {series?.items?.map((item, index) => (
          <div key={index}>
            <C.List isDark={isDarkMode}>{item.name}</C.List>
          </div>
        ))}
      </CharacterWrapper>
    </>
  );
}
