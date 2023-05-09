import styled from "styled-components";
import Link from "next/link";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const Card = styled.div<{ isDark: boolean }>`
  width: 10.875rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  color: ${({ isDark }) => (isDark ? "#F1F1F1" : "#332c39")};
  border: ${({ isDark }) => (isDark ? "1px solid #4f4557" : "none")};
  border-radius: 0.75rem;
  box-shadow: ${({ isDark }) =>
    isDark
      ? "0px 50px 55px -51px rgba(148, 145, 148, 0.95)"
      : "-1px 33px 33px -23px rgba(0, 0, 0, 0.36)"};

  object-fit: cover;
  padding: 0.5rem;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
export const ImageIcon = styled.img`
  object-fit: cover;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Name = styled.h4``;
