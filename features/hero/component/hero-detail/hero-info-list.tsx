import React, { useState, useContext } from "react";
import { Tooltip, Collapse } from "@mui/material";
import { useRouter } from "next/router";
import { useHero } from "@features/hero/api";
import { HeroInfo } from "./hero-info";
import * as A from "@features";

export function HeroInfoList() {
  const { isDarkMode } = useContext(A.ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useHero(Number(id));
  const [showLinks, setShowLinks] = useState(false);

  if (isLoading) return <A.LoadingSpinner />;

  if (isError)
    return (
      <A.EmptyPage isDark={isDarkMode}>Error, Refresh the browser</A.EmptyPage>
    );

  const { attributionText } = data || {};
  const { results } = data?.data || {};
  return (
    <>
      {results?.map((hero: any) => (
        <HeroInfo key={hero.id} {...hero} attributionText={attributionText} />
      ))}
      <Tooltip title="Click me" placement="top" arrow>
        <A.CommercialStick
          isDark={isDarkMode}
          onClick={() => setShowLinks(!showLinks)}
        >
          <A.Meanwhile>
            <A.Text>Meanwhile...</A.Text>
          </A.Meanwhile>

          <A.InfoText isDark={isDarkMode}>
            A secret... It’s more FUN when you read comics for FREE!
          </A.InfoText>
        </A.CommercialStick>
      </Tooltip>

      <A.FreeComicList isDark={isDarkMode}>
        <Collapse in={showLinks}>
          <A.Sites href="https://readallcomics.com/" target="_blank">
            Read All Comics
          </A.Sites>
          <A.Sites href="https://comiconlinefree.net/" target="_blank">
            Comic Online FREE
          </A.Sites>
        </Collapse>
      </A.FreeComicList>
      <br></br>
      <br></br>
      <A.TitleFlag text="Comics Section" />
      <A.CardContainer>
        <A.FlipCardList />
      </A.CardContainer>
    </>
  );
}
