import styled from "@emotion/styled";
import { HeaderName } from "@features";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  min-height: 3.5rem;
  background-color: #343a40;

  @media (max-width: 52.125rem) {
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const Title = styled(HeaderName)`
  font-size: 1rem;
  transform: none;
  letter-spacing: normal;
  text-shadow: -0.5px 0.5px white, 0.5px 0.5px yellow, 1px 1px orange;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
