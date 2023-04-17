import type { NextPage } from "next";
import * as A from "@features";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const ImageContainer = styled.div`
  border: 2px solid black;
  background-color: white;
`;
// const Image = styled.img``;

const ButtonStyle = styled(A.ButtonWrapper)``;
const InfoContainer = styled.div`
  padding: 0 1.5rem 0;
  max-width: 36.563rem;
  border: 2px solid black;
  background-color: white;

  ${ButtonStyle}{
    padding: 0.75rem 0;
`;

const Name = styled.h3``;

const HeroPage: NextPage = () => {
  return (
    <A.PageContainer>
      <Container>
        <ImageContainer>
          <CustomPlaceholder width={280} height={195} alt="hero image" />
        </ImageContainer>
        <InfoContainer>
          <Name>Heo</Name>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <A.ButtonWrapper>
            <A.PageButton href="/" label="Find Out More!" />
          </A.ButtonWrapper>
        </InfoContainer>
      </Container>
    </A.PageContainer>
  );
};

export default HeroPage;
