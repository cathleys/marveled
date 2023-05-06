import React from "react";
import { useRouter } from "next/router";
import { useComics } from "@features/hero/api";
import { FlipCard } from "./flip-card";
import { LoadingSpinner } from "@features";

export function FlipCardList() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useComics(Number(id));

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <p>Error</p>;

  const { results } = data?.data || {};
  return (
    <>
      {results?.map((comic: any) => (
        <FlipCard key={comic.id} {...comic} />
      ))}
    </>
  );
}
