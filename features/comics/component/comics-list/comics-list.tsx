import React from "react";
import { useComicsList } from "../../api";
import * as C from "@features";

export function ComicsList() {
  const { data, isLoading, isError } = useComicsList();

  if (isLoading) return <C.LoadingSpinner />;
  if (isError) return <p>Search Not Found</p>;

  const { results } = data?.data || {};
  return (
    <C.Grid>
      {results?.map((comic: any) => (
        <C.FlipCard key={comic.id} {...comic} />
      ))}
    </C.Grid>
  );
}
