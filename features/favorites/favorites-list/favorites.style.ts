import styled from "styled-components";
import Link from "next/link";

export const ContainerStyle = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: row;
  background: ${({ isDark }) => (isDark ? "#222" : "white")};
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: -1px 33px 33px -23px rgba(0, 0, 0, 0.36);
`;
export const Icon = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 0.75rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const TitleAndNotes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
export const Id = styled.div<{ isDark: boolean }>`
  font-size: 0.7rem;
  color: ${({ isDark }) => (isDark ? "#f1f1f1" : " #332c39")};
`;

export const AnchorLink = styled(Link)<{ isDark: boolean }>`
  text-decoration: none;
  color: ${({ isDark }) => (isDark ? "#f1f1f1" : " #332c39")};

  &:hover {
    color: #f2c94d;
  }
`;

export const EmptyPage = styled.h3<{ isDark: boolean }>`
  color: ${({ isDark }) => (isDark ? "#f1f1f1" : " #332c39")};
`;
