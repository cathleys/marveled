import styled from "styled-components";

export const HeroPageCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 2.875rem;
  width: 14.688rem;
  background-color: white;
  border-radius: 0.938rem;
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
export const Image = styled.img`
  width: 14.688rem;
  border-top-left-radius: 0.938rem;
  border-top-right-radius: 0.938rem;
`;
export const TextandButtonWrapper = styled.div`
  padding: 1rem;
`;
export const ButtonWrapper = styled.div`
  padding: 0.75rem 2.625rem;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(217, 217, 217, 0.25);
`;
