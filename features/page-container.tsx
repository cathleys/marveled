import React from "react";
import styled from "styled-components";

type PageProps = {
  children: React.ReactNode;
};
const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  height: 100vh;
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
