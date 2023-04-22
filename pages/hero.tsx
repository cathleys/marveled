import type { NextPage } from "next";
import * as A from "@features";
import { FlipCard } from "@features";

const HeroPage: NextPage = () => {
  return (
    <A.PageContainer>
      <A.Container>
        <A.Image src="icons/cm-card-comic1.jpg" alt="hero image" />

        <A.InfoContainer>
          <A.Name>Hulk</A.Name>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <A.ButtonWrapper style={{ paddingLeft: "0" }}>
            <A.PageButton href="/" label="Find Out More!" />
            <p>Data provided by Marvel</p>
          </A.ButtonWrapper>
        </A.InfoContainer>
      </A.Container>

      <A.CommercialStick>
        <A.Meanwhile>
          <A.Text>Meanwhile...</A.Text>
        </A.Meanwhile>
        <A.InfoText>
          A secret... It’s more FUN when you read comics for FREE!
        </A.InfoText>
      </A.CommercialStick>
      <A.CardContainer>
        <FlipCard src="icons/cm-card-comic1.jpg" alt="cm1" />
        <FlipCard src="icons/cm-card-comic2.jpg" alt="cm2" />
        <FlipCard src="icons/cm-card-comic3.jpg" alt="cm3" />
      </A.CardContainer>
    </A.PageContainer>
  );
};

export default HeroPage;
