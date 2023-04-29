import type { NextPage } from "next";
import * as A from "@features";

const CharacterListPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.CharacterIndex />
    </A.PageContainer>
  );
};

export default CharacterListPage;
