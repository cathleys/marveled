import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ThemeContext } from "@features";

type TitleFlagProps = {
  text: string;
};

const TitleStyle = styled.div<{ isDark: boolean }>`
  background: ${({ isDark }) => (isDark ? "#222" : "#fffacd")};
  border: ${({ isDark }) => (isDark ? "2px solid #f1f1f1" : "2px solid black")};
  transform: skew(-10deg);
  text-align: center;
  max-width: 11rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3<{ isDark: boolean }>`
  margin: 0.5rem;
  color: ${({ isDark }) => (isDark ? "#fffacd" : "black")};
`;
export function TitleFlag({ text }: TitleFlagProps) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <TitleStyle isDark={isDarkMode}>
      <Title isDark={isDarkMode}>{text}</Title>
    </TitleStyle>
  );
}
