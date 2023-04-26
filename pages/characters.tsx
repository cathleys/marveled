import type { NextPage } from "next";
import styled from "styled-components";
import * as A from "@features";
import { CharacterList } from "@features/characters/component/character-list";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: auto;
  gap: 1.5rem;
`;
const CharactersPage: NextPage = () => {
  return (
    <A.PageContainer>
      <Grid>
        <CharacterList />
      </Grid>
    </A.PageContainer>
  );
};

export default CharactersPage;
