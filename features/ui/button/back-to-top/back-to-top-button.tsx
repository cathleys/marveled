import React from "react";
import styled from "styled-components";

const BackToTop = styled.button`
  background: url(/icons/back-to-top.svg) no-repeat center;
  background-size: 20px;
  opacity: 80%;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background-color: #343a40;
  color: white;
  padding: 1.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #4d455d;
    border: 1px solid #222;
  }
`;

export function BackToTopButton() {
  return (
    <BackToTop
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
}
