import React from "react";
import { useCompleteCharacters } from "../api/use-complete-characters";
import * as G from "@features";
import { AZ } from "./a-z-letters";
import * as C from "./character-index.style";
import { Character } from "@features/characters/api/character-names";

export function CharacterIndex() {
  const { data, isLoading, isError, error } = useCompleteCharacters();

  //function that filters array by first letter
  const filterNames = (arr: Character[], query: string) =>
    arr.filter((element: Character) =>
      element.name.toLowerCase().startsWith(query.toLowerCase())
    );

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) {
    console.error(error);
    return <h2>There is something wrong with API...</h2>;
  }

  const { results } = data?.data || {};

  return (
    <>
      <G.Grid>
        {results?.map((item: any) => (
          <G.CharacterCard
            key={item.id}
            name={item.name}
            thumbnail={item.thumbnail}
          />
        ))}
      </G.Grid>

      <h1 style={{ marginTop: "2rem" }}>Character Index A-Z</h1>
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
          <h1 id={`${letter}`}>{letter}</h1>
          <C.NameContainer>
            {filterNames(G.characterNames, `${letter}`).map(
              (character: Character) => (
                <C.List key={character.name}>{character.name}</C.List>
              )
            )}
          </C.NameContainer>
        </div>
      ))}

      <G.BackToTopButton />
    </>
  );
}
