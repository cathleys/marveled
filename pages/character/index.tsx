import type { NextPage } from "next";
import * as A from "@features";

const CharactersPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.Grid>
        <A.CharacterList />
      </A.Grid>
    </A.PageContainer>
  );
};

export default CharactersPage;
