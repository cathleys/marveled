import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;
export const TitleAndTextWrapper = styled.div`
  padding: 1rem;
`;
export const FrontCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0px 50px 55px -51px rgba(148, 145, 148, 0.95);
`;
export const FrontCard = styled.img`
  height: 100%;
`;
export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18.75rem;
  height: 28.125rem;
  margin-bottom: 1rem;
  background: white;
  border: 3px solid black;
  border-radius: 0.5rem;
  box-shadow: 0px 50px 55px -51px rgba(148, 145, 148, 0.95);
`;
