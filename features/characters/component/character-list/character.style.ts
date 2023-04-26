import styled from "styled-components";

export const Card = styled.div`
  background-color: #ccc;
  border: 3px solid black;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
export const Image = styled.img`
  min-width: 100%;
`;
