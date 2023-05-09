import React, { useContext } from "react";
import { useComicsList } from "../../api";
import * as C from "@features";

export function ComicsList() {
  const { isDarkMode } = useContext(C.ThemeContext);
  const { data, isLoading, isError } = useComicsList();

  if (isLoading) return <C.LoadingSpinner />;
  if (isError)
    return <C.EmptyPage isDark={isDarkMode}>Search Not Found</C.EmptyPage>;

  const { results } = data?.data || {};
  return (
    <C.Grid>
      {results?.map((comic: any) => (
        <C.FlipCard key={comic.id} {...comic} />
      ))}
    </C.Grid>
  );
}
