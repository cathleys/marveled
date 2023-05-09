import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useComics } from "@features/hero/api";
import { FlipCard } from "./flip-card";
import * as C from "@features";

export function FlipCardList() {
  const { isDarkMode } = useContext(C.ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useComics(Number(id));

  if (isLoading) return <C.LoadingSpinner />;

  if (isError)
    return (
      <C.EmptyPage isDark={isDarkMode}>Error, Refresh the browser</C.EmptyPage>
    );

  const { results } = data?.data || {};
  return (
    <>
      {results?.map((comic: any) => (
        <FlipCard key={comic.id} {...comic} />
      ))}
    </>
  );
}
