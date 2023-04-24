import React from "react";
import * as A from "@features";

export function HeroInfo() {
  return (
    <>
      <A.Container>
        <A.Image src="icons/cm-card-comic1.jpg" alt="cm1" />

        <A.InfoContainer>
          <A.Name>Hulk</A.Name>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            laudantium praesentium ullam quia! Eveniet iusto itaque tempore
            magni enim nobis, ipsam expedita, error nisi vitae quaerat,
            voluptate similique facere repudiandae.
          </p>
          <A.ButtonWrapper style={{ paddingLeft: "0" }}>
            <A.PageButton href="/" label="Find Out More!" />
            <p>Data provided</p>
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
        <A.FlipCard src="icons/cm-card-comic1.jpg" alt="cm1" />
        <A.FlipCard src="icons/cm-card-comic2.jpg" alt="cm2" />
        <A.FlipCard src="icons/cm-card-comic3.jpg" alt="cm3" />
      </A.CardContainer>
    </>
  );
}
