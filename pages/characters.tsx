import type { NextPage } from "next";
import styled from "styled-components";
import * as A from "@features";
import { useCharacters } from "@features";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: auto;
  gap: 0.3rem;
`;
const CharactersPage: NextPage = () => {
  const characters = useCharacters("cath");
  const { data } = characters.data;
  console.log("character page data", data);
  return (
    <A.PageContainer>
      <Grid>
        <A.HeroesList />
      </Grid>
    </A.PageContainer>
  );
};

export default CharactersPage;
