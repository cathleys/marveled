import type { NextPage } from "next";
import * as A from "@features";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";
const Container = styled.div`
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
const ImageContainer = styled.div`
  border: 2px solid black;
  background-color: white;
  border-radius: 0.5rem;
`;
// const Image = styled.img``;

const ButtonStyle = styled(A.ButtonWrapper)`
  padding-left: 0;
`;
const InfoContainer = styled.div`
  padding: 0 1.5rem 0;
  max-width: 42rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: white;

  ${ButtonStyle}{
    padding: 0.75rem 0;
`;

const Name = styled.h3``;

const CommercialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 52rem) {
    justify-content: center;
    padding: 1rem;
    margin-top: 0;
  }
`;
const CommercialStick = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: italic;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: white;
  width: 100%;
  height: 3rem;
  padding: 1rem;

  @media (max-width: 52rem) {
    height: 6rem;
  }
`;

const Meanwhile = styled.div`
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

const Text = styled.p`
  position: absolute;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem;
`;
const InfoText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1.625rem;
  font-weight: bold;

  @media (max-width: 52rem) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
const HeroPage: NextPage = () => {
  return (
    <A.PageContainer>
      <Container>
        <ImageContainer>
          <CustomPlaceholder width={280} height={195} alt="hero image" />
        </ImageContainer>
        <InfoContainer>
          <Name>Hulk</Name>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ButtonStyle>
            <A.PageButton href="/" label="Find Out More!" />
          </ButtonStyle>
        </InfoContainer>
      </Container>
      <CommercialContainer>
        <CommercialStick>
          <Meanwhile>
            <Text>Meanwhile...</Text>
          </Meanwhile>
          <InfoText>
            A secret... It’s more FUN when you read comics for FREE!
          </InfoText>
        </CommercialStick>
      </CommercialContainer>
    </A.PageContainer>
  );
};

export default HeroPage;
