import type { NextPage } from "next";
import * as A from "@features";

const HeroDetailsPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.HeroInfoList />
    </A.PageContainer>
  );
};

export default HeroDetailsPage;
