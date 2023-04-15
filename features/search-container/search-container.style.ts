import styled from "@emotion/styled";
import { HeaderName } from "@features";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3.5rem;
  background-color: #343a40;
`;

export const Title = styled(HeaderName)`
  font-size: 1rem;
  transform: none;
  letter-spacing: normal;
  text-shadow: -0.5px 0.5px white, 0.5px 0.5px yellow, 1px 1px orange;
  padding-left: 10rem;
`;
