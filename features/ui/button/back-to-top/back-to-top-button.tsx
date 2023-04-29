import React from "react";
import styled from "styled-components";

const BackToTop = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background-color: #343a40;
  color: white;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: #4d455d;
  }
`;

export function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <BackToTop onClick={handleBackToTop}>Back to Top</BackToTop>;
}
