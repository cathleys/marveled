import type { NextPage } from "next";
import * as A from "@features";

const CharacterByEventsPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.CharacterByEventsList />
    </A.PageContainer>
  );
};

export default CharacterByEventsPage;
