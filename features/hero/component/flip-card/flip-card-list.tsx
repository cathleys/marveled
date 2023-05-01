import React from "react";
import { useComics } from "@features/hero/api";
import { FlipCard } from "./flip-card";
import { useRouter } from "next/router";

export function FlipCardList() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useComics(Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }

  const { results } = data?.data || {};
  return (
    <>
      {results?.map((comic: any) => (
        <FlipCard
          key={comic.id}
          title={comic.title}
          variantDescription={comic.variantDescription}
          thumbnail={comic.thumbnail}
        />
      ))}
    </>
  );
}
