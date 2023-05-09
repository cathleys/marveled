import React from "react";
import { useRouter } from "next/router";
import { useComicsById } from "@features/comics/api";
import { ComicDetailsById } from "./comic-details-by-id";
import * as C from "@features";

export function ComicDetailsList() {
  const { isDarkMode } = React.useContext(C.ThemeContext);
  const router = useRouter();
  const { comicId } = router.query;
  const { data, isLoading, isError } = useComicsById(Number(comicId));
  const { results } = data?.data || {};
  const { attributionText, copyright } = data || {};

  if (isLoading) return <C.LoadingSpinner />;
  if (isError)
    return (
      <C.EmptyPage isDark={isDarkMode}>Error, Refresh the browser</C.EmptyPage>
    );
  return (
    <>
      {results?.map((comic: any) => (
        <ComicDetailsById
          key={comic.id}
          {...comic}
          attributionText={attributionText}
        />
      ))}
      <C.Footer copyright={copyright} />
    </>
  );
}
