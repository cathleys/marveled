import type { NextPage } from "next";
import * as A from "@features";
import { CharacterList } from "@features/characters/component/character-list";

const CharactersPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.Grid>
        <CharacterList />
      </A.Grid>
    </A.PageContainer>
  );
};

export default CharactersPage;
