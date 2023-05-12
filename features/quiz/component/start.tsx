import React, { useRef } from "react";
import styled from "styled-components";
import { PageButton } from "@features";
import { Routes } from "@config/routes";
import { CustomButton } from "@features/ui/button/button.style";
import { useRouter } from "next/router";

const StartPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #343a40;
  height: 100vh;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
export const BackButton = styled(CustomButton)`
  border: none;
  outline: none;
  background: none;
  text-align: center;
  color: white;
  margin: 1rem;
  &:hover,
  &:focus {
    outline: none;
    background: transparent;
    border: 1px solid white;
    color: white;
  }
`;
type StartProps = {
  setUserName: any;
};
export function Start({ setUserName }: StartProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    if (inputRef.current && inputRef.current.value) {
      setUserName(inputRef.current.value);
    } else {
      setUserName(null);
    }
  };
  return (
    <StartPlay>
      <Input placeholder="Enter your nickname" type="text" ref={inputRef} />
      <PageButton label={"Start"} href={""} onClick={handleStart} />
      <BackButton
        onClick={() => {
          router.push({
            pathname: Routes.home,
          });
        }}
      >
        Go Back
      </BackButton>
    </StartPlay>
  );
}
