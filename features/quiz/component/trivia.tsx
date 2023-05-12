import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useSound from "use-sound";
interface QuestionProps {
  question: string;
  answers: any[];
}
export enum ChoiceColor {
  // eslint-disable-next-line no-unused-vars
  default = "default",
  // eslint-disable-next-line no-unused-vars
  active = "active",
  // eslint-disable-next-line no-unused-vars
  correct = "correct",
  // eslint-disable-next-line no-unused-vars
  wrong = "wrong",
}

type ChoiceProps = {
  color?: ChoiceColor;
  questions: any[];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
};
const TriviaContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #343a40;
`;
const Question = styled.div`
  width: 60vw;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  border: 3px solid black;
  font-weight: 700;
  font-size: 1.2rem;
`;
const MultipleChoice = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Choice = styled.div<{
  color: ChoiceColor;
}>`
  min-width: 40%;
  text-align: center;
  padding: 0.625rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to right,
      #b993d6 0%,
      #8ca6db 51%,
      #b993d6 100%
    );
  }

  ${(props) => {
    switch (props.color) {
      case ChoiceColor.active:
        return css`
          background-image: linear-gradient(
            to right,
            #b993d6 0%,
            #8ca6db 51%,
            #b993d6 100%
          );
        `;
      case ChoiceColor.correct:
        return css`
          animation: correct 3s ease forwards;
          @keyframes correct {
            0%,
            22%,
            42% {
              background: #b993d6;
            }

            20%,
            40%,
            60% {
              background-image: linear-gradient(
                to right,
                #b993d6 0%,
                #8ca6db 51%,
                #b993d6 100%
              );
            }

            62%,
            100% {
              background-image: linear-gradient(
                to right,
                #dce35b 0%,
                #45b649 51%,
                #dce35b 100%
              );
            }
          }
        `;
      case ChoiceColor.wrong:
        return css`
        animation: correct 3s ease forwards;
        @keyframes correct {
          0%,
          22%,
          42% {
            background: #b993d6;
          }
  
          20%,
          40%,
          60% {
            background-image: linear-gradient(
              to right,
              #b993d6 0%,
              #8ca6db 51%,
              #b993d6 100%
            );
          }
  
          62%,
          100% {
            background-image: linear-gradient(to right, #EB3349 0%, #F45C43 51%, #EB3349 100%);
            );
          }
        }
        `;
      case ChoiceColor.default:
        return css`
          background-image: linear-gradient(
            111.4deg,
            rgba(238, 113, 113, 1) 1%,
            rgba(246, 215, 148, 1) 58%
          );
        `;
    }
  }}
`;
export function Trivia({
  color = ChoiceColor.default,
  questions,
  questionNumber,
  setQuestionNumber,
  setStop,
}: ChoiceProps) {
  const [question, setQuestion] = useState<QuestionProps | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasColor, setHasColor] = useState(color);
  const [letsPlay] = useSound("/sounds/play.mp3");
  const [win] = useSound("/sounds/win.mp3");
  const [lose] = useSound("/sounds/lose.mp3");

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  const delay = (callback: any, duration: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer: any) => {
    setSelectedAnswer(answer);
    setHasColor(ChoiceColor.active);
    delay(
      () =>
        setHasColor(answer.correct ? ChoiceColor.correct : ChoiceColor.wrong),
      2000
    );
    delay(
      () => {
        if (answer.correct) {
          win();
          delay(() => {
            setQuestionNumber((prevQuestion) => prevQuestion + 1);
            setSelectedAnswer(null);
          }, 2000);
        } else {
          lose();
          delay(() => {
            setStop(true);
          }, 1000);
        }
      },

      4000
    );
  };
  return (
    <TriviaContainer>
      <Question>{question?.question}</Question>
      <MultipleChoice>
        {question?.answers?.map((answer, index) => (
          <Choice
            key={index}
            color={selectedAnswer === answer ? hasColor : color}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </Choice>
        ))}
      </MultipleChoice>
    </TriviaContainer>
  );
}
