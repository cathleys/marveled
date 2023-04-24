import type { NextPage } from "next";
import * as A from "@features";

const HeroPage: NextPage = () => {
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
