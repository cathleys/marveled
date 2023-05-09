import { NextPage } from "next";
import * as C from "@features";

const FavoritesPage: NextPage = () => {
  return (
    <C.PageContainer>
      <C.FavoritesList />
    </C.PageContainer>
  );
};

export default FavoritesPage;
