import React from "react";
import { useCharacters } from "@features/characters/api/use-characters";
import { CharacterCard } from "./character-card";

export function CharacterList() {
  const { data, isLoading, isError } = useCharacters("Captain");

  console.log("CharacterList", "result: ", data);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Search not found...</p>;

  return (
    <>
      {data?.data?.results?.map((item: any) => (
        <CharacterCard
          key={item.id}
          name={item.name}
          thumbnail={item.thumbnail}
        />
      ))}
    </>
  );
}
