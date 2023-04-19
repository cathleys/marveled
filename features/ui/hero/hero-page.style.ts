import styled from "styled-components";
import { ButtonWrapper } from "@features";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 52rem) {
    justify-content: center;
    padding: 1rem;
  }
`;
export const Image = styled.img`
  width: 17.5rem;
  height: 17rem;
  border: 3px solid black;
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;

export const ButtonStyle = styled(ButtonWrapper)`
  padding-left: 0;
`;
export const InfoContainer = styled.div`
  padding: 0 1.5rem 0;
  max-width: 42rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
  
  ${ButtonStyle}{
    padding: 0.75rem 0;
`;

export const Name = styled.h3``;

export const CommercialStick = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: italic;
  border: 3px solid black;
  border-radius: 0.5rem;
  background-color: white;
  height: 3rem;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
  @media (max-width: 52rem) {
    height: 6rem;
    margin: 1rem;
  }
`;

export const Meanwhile = styled.div`
  position: absolute;
  bottom: 49%;
  left: 0%;
  height: 2rem;
  width: 7rem;
  padding-top: 0.5rem;
  border: 1px solid black;
  border-left: transparent;
  border-top-left-radius: 0.5rem;
  background-color: #fffacd;

  @media (max-width: 52rem) {
    bottom: 68%;
  }
`;

export const Text = styled.p`
  position: absolute;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
`;
export const InfoText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1.625rem;
  font-weight: bold;

  @media (max-width: 52rem) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;
export const FlipCard = styled.img`
  width: 15.125rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
