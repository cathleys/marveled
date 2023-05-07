import React from "react";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export function LoadingSpinner() {
  return (
    <LoadingStyle data-cy="loading-spinner">
      <CircularProgress color="warning" />
    </LoadingStyle>
  );
}
