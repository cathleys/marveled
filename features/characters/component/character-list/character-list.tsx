import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCharacters } from "@features/characters/api/use-characters";
import { CharacterCard } from "./character-card";
import { LoadingSpinner } from "@features";

export function CharacterList() {
  const router = useRouter();
  const searchHero = router.query.nameStartsWith as string;
  const { data, isLoading, isError, refetch } = useCharacters(searchHero);
  const { results } = data?.data || {};

  useEffect(() => {
    refetch();
  }, [searchHero, refetch]);

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <h2>Search not found...</h2>;

  if (!results?.length)
    return <h2>Oops! Check {searchHero} spelling or try other hero again.</h2>;

  return (
    <>
      {results?.map((character: any) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </>
  );
}
