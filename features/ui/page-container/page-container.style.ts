import styled from "@emotion/styled";

export const Container = styled.div<{ isDark: boolean }>`
  display: flex;
  background-image: ${({ isDark }) =>
      isDark
        ? "radial-gradient(rgb(82, 82, 82) 10%, transparent 10%)"
        : "radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%)"},
    ${({ isDark }) =>
      isDark
        ? "radial-gradient(rgb(82, 82, 82) 10%, transparent 10%)"
        : "radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%)"};
  background-position: ${({ isDark }) =>
    isDark ? "0px 0px, 8px 8px" : "0px 0px, 4px 4px"};
  background-size: ${({ isDark }) => (isDark ? "1rem 1rem" : "0.5rem 0.5rem")};
  background-color: ${({ isDark }) => (isDark ? "#222" : "rgb(245, 245, 245)")};
`;
export const Main = styled.main`
  flex: 1;
  padding: 3rem 10rem;

  @media (max-width: 64em) {
    padding: 2rem 1rem;
  }
`;
