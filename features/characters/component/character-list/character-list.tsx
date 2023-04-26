import React, { useEffect } from "react";
import { useCharacters } from "@features/characters/api/use-characters";
import { CharacterCard } from "./character-card";
import { useRouter } from "next/router";

export function CharacterList() {
  const router = useRouter();
  const searchHero = router.query.nameStartsWith as string;
  const { data, isLoading, isError, refetch } = useCharacters(searchHero);

  useEffect(() => {
    refetch();
  }, [searchHero, refetch]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Search not found...</h2>;
  if (!data?.data?.results?.length)
    return <h2>Oops! Maybe {searchHero} is not a Marvel Hero. Try again...</h2>;

  const { results } = data?.data || {};
  return (
    <>
      {results.map((item: any) => (
        <CharacterCard
          key={item.id}
          name={item.name}
          thumbnail={item.thumbnail}
        />
      ))}
    </>
  );
}
