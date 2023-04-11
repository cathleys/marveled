import React from "react";
import styled from "styled-components";

type PageProps = {
  children: React.ReactNode;
};
const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  height: 100vh;
  background-image: radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%),
    radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%);
  background-position: 0px 0px, 4px 4px;
  background-size: 8px 8px;
  background-color: rgb(245, 245, 245);
`;
const Main = styled.main`
  flex: 1;
`;

export function PageContainer({ children }: PageProps) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}
