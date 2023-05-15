import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useCharacterByEvents } from "@features/characters/api";
import * as C from "@features";

export function CharacterByEventsList() {
  const { isDarkMode } = useContext(C.ThemeContext);
  const router = useRouter();
  const { characterId } = router.query;
  const { data, isLoading, isError } = useCharacterByEvents(
    Number(characterId)
  );
  const { results } = data?.data || {};
  const { attributionText } = data || {};

  if (isLoading) return <C.LoadingSpinner />;
  if (isError)
    return (
      <C.EmptyPage isDark={isDarkMode}>Error, Refresh the browser</C.EmptyPage>
    );
  if (results?.length === 0)
    return (
      <C.EmptyPage isDark={isDarkMode}>Sorry, No available results</C.EmptyPage>
    );
  return (
    <>
      <C.TitleFlag text="Character Events" />
      {results?.map((event: any) => (
        <C.CharacterByEventsCard
          key={event.id}
          {...event}
          attributionText={attributionText}
        />
      ))}
    </>
  );
}
