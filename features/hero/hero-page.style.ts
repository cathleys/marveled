import styled from "styled-components";
import { ImageIcon } from "@features/characters";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 64em) {
    justify-content: center;
    padding: 1rem;
  }
`;
export const Image = styled(ImageIcon)<{ isDark: boolean }>`
  border: 3px solid black;
  background-color: white;
  border-radius: 0.5rem;
  width: 255px;
  box-shadow: ${({ isDark }) =>
    isDark
      ? "0px 50px 55px -51px rgba(148, 145, 148, 0.95)"
      : "-1px 33px 58px -23px rgba(0, 0, 0, 0.36)"};

  @media (max-width: 64rem) {
    margin-bottom: 1.5rem;
  }
`;

export const HeroName = styled.h3``;
export const Description = styled.p``;
export const Attribution = styled.p`
  margin: 0.5rem 0 0 0;
`;
export const Meanwhile = styled.div`
  position: absolute;
  bottom: 49%;
  left: 0%;
  height: 2rem;
  width: 7rem;
  padding-top: 0.5rem;
  border: 2px solid black;
  border-left: transparent;
  border-top-left-radius: 0.5rem;
  background-color: #fffacd;

  @media (max-width: 64em) {
    bottom: 68%;
  }
`;

export const CommercialStick = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: italic;
  border: 3px solid black;
  border-radius: 0.5rem;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  height: 3rem;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);

  @media (max-width: 64em) {
    height: 6rem;
    margin: 1rem;
  }
`;

export const Text = styled.p`
  position: absolute;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
`;
export const InfoText = styled.p<{ isDark: boolean }>`
  text-align: center;
  margin: 0;
  font-size: 1.625rem;
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};

  @media (max-width: 64em) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;
export const InfoContainer = styled.div<{ isDark: boolean }>`
  padding: 1rem 0 0 0;
  max-width: 42rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  box-shadow: ${({ isDark }) =>
    isDark
      ? "0px 50px 55px -51px rgba(148, 145, 148, 0.95)"
      : "-1px 33px 58px -23px rgba(0, 0, 0, 0.36)"};

  ${HeroName}, ${Description} {
    padding: 0 1rem;
    color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  }

  ,
  ${Attribution} {
    color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  }
`;
