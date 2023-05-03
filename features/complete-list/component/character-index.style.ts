import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
  border-radius: 0.625rem;
  padding: 1rem;
  background: #343a40;
`;

export const List = styled.a<{ isDark: boolean }>`
  text-decoration: none;
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
export const AnchorTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: 0.5rem;

  &:hover {
    color: orange;
  }
`;

export const DisabledAnchorTag = styled(AnchorTag)`
  color: gray;
  pointer-events: none;
`;

export const NameContainer = styled.div<{ isDark: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Set the number of columns to 2
  grid-gap: 10px;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  padding: 2rem;
  border: 3px solid ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  border-radius: 0.625rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};

  @media (max-width: 64em) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const AZHeader = styled.h1<{ isDark: boolean }>`
  margin-top: 2rem;
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
`;
