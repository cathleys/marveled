import styled from "styled-components";
import Link from "next/link";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: auto;
  gap: 1.5rem;
`;
export const Card = styled.div`
  width: 10.875rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f6ffde;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
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

export const Name = styled.h4`
  color: #4f4557;
`;
