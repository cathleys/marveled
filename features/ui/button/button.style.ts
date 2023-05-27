import styled from "styled-components";
import { Button } from "@mui/material";

export const CustomButton = styled.button`
  background: #fffacd;
  border: 2px solid black;
  color: black;
  min-width: 7.625rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background-image: linear-gradient(
      111.4deg,
      rgba(238, 113, 113, 1) 1%,
      rgba(246, 215, 148, 1) 58%
    );
  }
`;

export const TransparentButton = styled(Button)`
  background: none;
  border: none;
  outline: none;
  font-family: Comic Neue, Sans-Serif;
  color: white;
`;
