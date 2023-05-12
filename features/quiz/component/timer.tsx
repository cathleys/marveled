import React, { useEffect, useState } from "react";

type TimerProps = {
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
};
export function Timer({ setStop, questionNumber }: TimerProps) {
  const [time, setTime] = useState(30);

  //for the timer
  useEffect(() => {
    if (time === 0) return setStop(true);
    const interval = setInterval(() => {
      setTime((count) => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, setStop]);

  //   //when the question number changes
  useEffect(() => {
    setTime(30);
  }, [questionNumber]);

  return <>{time}</>;
}
