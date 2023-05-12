import styled from "styled-components";
import Link from "next/link";
import { HeaderName } from "../page-container";

export const Title = styled(HeaderName)`
  font-size: 1rem;
  transform: none;
  letter-spacing: normal;
  text-shadow: -0.5px 0.5px white, 0.5px 0.5px yellow, 1px 1px orange;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  min-height: 3.5rem;
  background-color: #343a40;

  @media (max-width: 64em) {
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;

  @media (max-width: 64em) {
    margin-bottom: 0.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  background: #212529 url(/icons/search-icon.svg) no-repeat left 0.7rem center;
  width: 20rem;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 0.6rem 0.6rem 0.6rem 2rem;
  color: white;
  margin-right: 0.5rem;

  @media (max-width: 64em) {
    margin-bottom: 0.5rem;
  }
`;

export const NavItems = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 64em) {
    margin: 0.7rem;
  }
`;

export const PageAndSwitch = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
  }
`;
