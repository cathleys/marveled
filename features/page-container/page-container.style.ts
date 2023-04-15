import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  background-image: radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%),
    radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%);
  background-position: 0px 0px, 4px 4px;
  background-size: 8px 8px;
  background-color: rgb(245, 245, 245);
`;
export const Main = styled.main`
  flex: 1;
  padding: 2rem 10rem;

  @media (max-width: 52.125rem) {
    padding: 0;
  }
`;
