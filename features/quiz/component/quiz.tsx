import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  Timer,
  Trivia,
  moneyItems,
  questions,
  Start,
  PageButton,
} from "@features";
import { Routes } from "@config/routes";
const MoneySection = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  width: 75%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #343a40),
    url(${(props) => props.bgImage}) center;
  background-size: cover;
  transition: background 0.2s fadein;
`;
const TimerContainer = styled.div`
  position: relative;
  height: 50vh;
`;
const QuestionAndAnswerContainer = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
`;
const ContainerStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  background: #343a40;
  color: white;

  @media (max-width: 64em) {
    flex-direction: column;
    height: unset;

    ${Main}, ${MoneySection} {
      width: 100%;
    }

    ${TimerContainer} {
      height: 20vh;
    }
    ${QuestionAndAnswerContainer} {
      height: unset;
    }
  }
`;

const TimeBomb = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 4.375rem;
  height: 4.375rem;
  background: white;
  border: 5px solid black;
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
`;

const MoneyList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 1rem;
`;
const MoneyListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${({ isActive }) => (isActive ? "#344054" : "transparent")};
  transform: ${({ isActive }) => (isActive ? "scale(1.09)" : "none")};
  transition: transform 0.3s ease;
  border-radius: 0.3rem;
`;
const MoneyListItemNumber = styled.span`
  font-size: 1rem;
  min-width: 2rem;
`;
const MoneyListItemAmount = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Modal = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: linear-gradient(
    to right,
    #dd5e89 0%,
    #f7bb97 51%,
    #dd5e89 100%
  );
  padding: 3rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  color: black;
`;

export function Quiz() {
  const [isActive] = useState(false);
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isStop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [image, setImage] = useState(0);

  const bgImages = useMemo(
    () => [
      { src: "icons/m1.jpg" },
      { src: "icons/m2.jpg" },
      { src: "icons/m3.jpg" },
      { src: "icons/m4.jpg" },
      { src: "icons/m5.jpg" },
      { src: "icons/m6.jpg" },
      { src: "icons/m7.jpg" },
      { src: "icons/m8.jpg" },
      { src: "icons/m9.jpg" },
      { src: "icons/m10.jpg" },
      { src: "icons/m11.jpg" },
      { src: "icons/m12.jpg" },
      { src: "icons/m13.jpg" },
      { src: "icons/m14.jpg" },
      { src: "icons/m15.jpg" },
      { src: "icons/m16.jpg" },
      { src: "icons/m17.jpg" },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (image === bgImages.length - 1) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [image, bgImages]);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        String(
          moneyItems?.find((money) => money.id === questionNumber - 1)
            ?.amount || 0
        )
      );
  }, [questionNumber]);
  const backgroundImage = bgImages[image].src;
  return (
    <>
      {userName ? (
        <ContainerStyle>
          <Main bgImage={backgroundImage}>
            {isStop ? (
              <Modal>
                <h3>
                  You`ll bring home the jolly but not the bacon.
                  <br></br>
                  You Earned: {earned}
                </h3>
                <PageButton label="Exit" href={Routes.home} />
              </Modal>
            ) : (
              <>
                <TimerContainer>
                  <TimeBomb>
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </TimeBomb>
                </TimerContainer>
                <QuestionAndAnswerContainer>
                  <Trivia
                    questions={questions}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </QuestionAndAnswerContainer>
              </>
            )}
          </Main>
          <MoneySection>
            <MoneyList>
              {moneyItems.map((moneyItem) => (
                <MoneyListItem
                  key={moneyItem.id}
                  isActive={
                    questionNumber === moneyItem.id ? !isActive : isActive
                  }
                >
                  <MoneyListItemNumber>{moneyItem.id}</MoneyListItemNumber>
                  <MoneyListItemAmount>{moneyItem.amount}</MoneyListItemAmount>
                </MoneyListItem>
              ))}
            </MoneyList>
          </MoneySection>
        </ContainerStyle>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </>
  );
}
