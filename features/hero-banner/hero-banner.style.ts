import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 52.125rem) {
    padding: 2rem 1rem;
  }
`;
export const Container = styled.div`
  max-width: 64rem;
  background: #f2c94d url("/icons/captain-marvel.jpg") no-repeat right top;
  background-size: 39.375rem;
  border-radius: 0.625rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 52.125rem) {
    text-align: center;
  }
`;
export const H1 = styled.h1`
  font-size: 2.813rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0;

  @media (max-width: 52.125rem) {
    font-size: 2rem;
  }
`;
export const InfoText = styled.p`
  font-size: 1.125rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 400px;

  @media (max-width: 52.125rem) {
    margin: 0 auto;
  }
`;
