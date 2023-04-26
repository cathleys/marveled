import * as H from "@features";

export default function Home() {
  return (
    <>
      <H.PageContainer>
        <H.HomeBanner />
        <H.HeroPageCardContainer>
          {H.homeCards.map((card, index) => (
            <H.HomeCard
              key={index}
              src={card.src}
              alt={card.name}
              title={card.title}
              info={card.info}
            />
          ))}
        </H.HeroPageCardContainer>
      </H.PageContainer>
    </>
  );
}
