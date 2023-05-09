import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCharacters } from "@features/characters/api/use-characters";
import { CharacterCard } from "./character-card";
import * as C from "@features";

export function CharacterList() {
  const router = useRouter();
  const searchHero = router.query.nameStartsWith as string;
  const { data, isLoading, isError, refetch } = useCharacters(searchHero);
  const { results } = data?.data || {};
  const { isDarkMode } = React.useContext(C.ThemeContext);

  useEffect(() => {
    refetch();
  }, [searchHero, refetch]);

  if (isLoading) return <C.LoadingSpinner />;

  if (isError)
    return <C.EmptyPage isDark={isDarkMode}>Search not found...</C.EmptyPage>;

  if (!results?.length)
    return (
      <C.EmptyPage isDark={isDarkMode}>
        Oops! Check {searchHero} spelling or try other hero again.
      </C.EmptyPage>
    );

  return (
    <>
      {results?.map((character: any) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </>
  );
}
