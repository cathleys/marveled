import React, { useState, useContext } from "react";
import * as A from "@features";
import { HeroInfo } from "./hero-info";
import { useRouter } from "next/router";
import { useHero } from "@features/hero/api";
import { Link, Tooltip, Collapse } from "@mui/material";

export function HeroInfoList() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useHero(Number(id));
  const [showLinks, setShowLinks] = useState(false);
  const { isDarkMode } = useContext(A.ThemeContext);

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
          <Link
            underline="hover"
            style={{ display: "inline-flex", padding: "1rem" }}
            href={"https://readallcomics.com/"}
            target="_black"
          >
            Read All Comics
          </Link>

          <Link
            underline="hover"
            style={{ display: "inline-flex", padding: "1rem" }}
            href={"https://comiconlinefree.net/"}
            target="_black"
          >
            Comic Online FREE
          </Link>
        </Collapse>
      </A.FreeComicList>

      <A.CardContainer>
        <A.FlipCardList />
      </A.CardContainer>
    </>
  );
}
