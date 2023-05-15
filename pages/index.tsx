import { NextPage } from "next";
import { Routes } from "@config/routes";
import styled from "styled-components";
import { PageButton } from "@features";

const HeroImage = styled.img`
  box-sizing: border-box;
  width: 35%;
`;
const LandingStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  background: rgb(245, 245, 245);
  height: 100vh;

  @media (max-width: 64em) {
    ${HeroImage} {
      display: none;
    }
  }
`;

const HeaderNav = styled.div`
  box-sizing: border-box;
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 3rem;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  transform: none;
  text-shadow: -0.5px 0.5px white, 0.5px 0.5px yellow, 1px 1px orange;
`;
const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div``;
const TextAndButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const SecondSection = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-top: 3px solid black;
  background: url("/icons/lp4.png");

  background-size: cover;
  color: white;
  text-align: center;
`;
const SecondImage = styled.img`
  width: 60%;
`;
const SecondText = styled.div`
  padding-bottom: 2rem;
`;
const SubHeader = styled.h1``;
const LandingPage: NextPage = () => {
  return (
    <>
      <HeaderNav>
        <Logo>Marveled</Logo>
        <PageButton label="Get Started" href={Routes.home} />
      </HeaderNav>
      <LandingStyle>
        <Hero>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <HeroImage src="/icons/lp1.png" alt="marveled" />
          <TextAndButton>
            <h1> Unleash the Marvel Universe at Your Fingertips</h1>
            <Text>
              Unlock the extraordinary world of Marvel comics like never before
              with Marveled, your ultimate comic book character app. Seamlessly
              powered by the renowned Marvel API.
            </Text>
            <br></br>
            <PageButton label="Get Started" href={Routes.home} />
          </TextAndButton>
        </Hero>
      </LandingStyle>

      <SecondSection>
        <SubHeader> Discover Marvel Heroes and Their Comics</SubHeader>
        <SecondText>
          Whether you`re searching for the mighty Avengers, the enigmatic X-Men,
          or the fearless Guardians of the Galaxy, Marveled provides a
          user-friendly platform to explore and learn about your favorite
          characters. Uncover thrilling storylines and delve into a treasure
          trove of comics featuring your beloved Marvel heroes.
        </SecondText>

        <SecondImage src="/icons/lp2.png" alt="marveled2" />
      </SecondSection>
    </>
  );
};

export default LandingPage;
