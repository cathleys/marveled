import React from "react";
import { useRouter } from "next/router";
import { useComicsById } from "@features/comics/api";
import { Footer, LoadingSpinner } from "@features";
import { ComicDetailsById } from "./comic-details-by-id";

export function ComicDetailsList() {
  const router = useRouter();
  const { comicId } = router.query;
  const { data, isLoading, isError } = useComicsById(Number(comicId));
  const { results } = data?.data || {};
  const { attributionText, copyright } = data || {};

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>error</div>;
  return (
    <>
      {results?.map((comic: any) => (
        <ComicDetailsById
          key={comic.id}
          {...comic}
          attributionText={attributionText}
        />
      ))}
      <Footer copyright={copyright} />
    </>
  );
}
