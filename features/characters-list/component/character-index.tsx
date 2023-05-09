import React, { useContext } from "react";
import Link from "next/link";
import { Routes } from "@config/routes";
import { useCompleteCharacters } from "../api/use-complete-characters";
import { Character } from "@features/characters/api/character-names";
import * as C from "./character-index.style";
import { AZ } from "./a-z-letters";
import * as G from "@features";

export function CharacterIndex() {
  const { isDarkMode } = useContext(G.ThemeContext);
  const { data, isLoading, isError, error } = useCompleteCharacters();

  //function that filters array by first letter
  const filterNames = (arr: Character[], query: string) =>
    arr.filter((element: Character) =>
      element.name.toLowerCase().startsWith(query.toLowerCase())
    );

  if (isLoading) return <G.LoadingSpinner />;

  if (isError) {
    console.error(error);
    return (
      <G.EmptyPage isDark={isDarkMode}>
        There is something wrong with API...
      </G.EmptyPage>
    );
  }

  const { results } = data?.data || {};

  return (
    <>
      <G.Grid>
        {results?.map((character: any) => (
          <G.CharacterCard key={character.id} {...character} />
        ))}
      </G.Grid>

      <C.AZHeader isDark={isDarkMode}>Character Index A-Z</C.AZHeader>
      <C.Wrapper>
        {AZ.map((letter, index) => {
          const hasNames = G.characterNames.some((character) =>
            character.name.startsWith(`${letter}`)
          );
          if (hasNames) {
            return (
              <C.AnchorTag key={index} href={`#${letter}`}>
                {letter}
              </C.AnchorTag>
            );
          } else {
            return (
              <C.DisabledAnchorTag key={index}>{letter}</C.DisabledAnchorTag>
            );
          }
        })}
      </C.Wrapper>

      {AZ.map((letter, index) => (
        <div key={index}>
          <C.AZHeader isDark={isDarkMode} id={`${letter}`}>
            {letter}
          </C.AZHeader>
          <C.NameContainer isDark={isDarkMode}>
            {filterNames(G.characterNames, `${letter}`).map(
              (character: Character) => (
                <Link
                  key={character.name}
                  href={{
                    pathname: Routes.characters,
                    query: { nameStartsWith: character.name },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <C.List isDark={isDarkMode}>{character.name}</C.List>
                </Link>
              )
            )}
          </C.NameContainer>
        </div>
      ))}

      <G.BackToTopButton />
    </>
  );
}
