import { NextPage } from "next";
import * as C from "@features";

const ComicsPage: NextPage = () => {
  return (
    <C.PageContainer>
      <C.ComicsList />
    </C.PageContainer>
  );
};

export default ComicsPage;
