import * as H from "@features";

const HomePage = () => {
  return (
    <>
      <H.PageContainer>
        <H.TitleFlag text="Featured Hero" />
        <H.HomeBanner />
        <H.HeroPageCardContainer>
          {H.homeCards.map((card, index) => (
            <H.HomeCard key={index} alt={card.name} {...card} />
          ))}
        </H.HeroPageCardContainer>
      </H.PageContainer>
    </>
  );
};

export default HomePage;
