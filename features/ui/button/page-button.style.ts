import Button from "@mui/material/Button";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  background: #fffacd;
  border: 2px solid black;
  color: black;
  width: 7.625rem;
  border-radius: 0.5rem;

  &:hover {
    background: black;
    border: 2px solid yellow;
    color: yellow;
  }
`;
