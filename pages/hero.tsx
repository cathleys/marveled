import type { NextPage } from "next";
import * as A from "@features";
// import { useHero } from "@features/hero/api/use-hero";

const HeroPage: NextPage = () => {
  // const hero = useHero();

  return (
    <A.PageContainer>
      <A.HeroInfo />
      <A.CardContainer>
        <A.FlipCard src="icons/cm-card-comic1.jpg" alt="cm1" />
      </A.CardContainer>
    </A.PageContainer>
  );
};

export default HeroPage;
