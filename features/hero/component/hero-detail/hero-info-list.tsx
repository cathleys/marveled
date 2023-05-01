import React from "react";
import * as A from "@features";
import { HeroInfo } from "./hero-info";
import { useRouter } from "next/router";
import { useHero } from "@features/hero/api";

export function HeroInfoList() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useHero(Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }

  const { attributionText } = data || {};
  const { results } = data?.data || {};
  return (
    <>
      {results?.map((hero: any) => (
        <HeroInfo
          key={hero.id}
          {...hero}
          attributionText={`${attributionText}`}
        />
      ))}

      <A.CommercialStick>
        <A.Meanwhile>
          <A.Text>Meanwhile...</A.Text>
        </A.Meanwhile>
        <A.InfoText>
          A secret... It’s more FUN when you read comics for FREE!
        </A.InfoText>
      </A.CommercialStick>

      <A.CardContainer>
        <A.FlipCardList />
      </A.CardContainer>
    </>
  );
}
