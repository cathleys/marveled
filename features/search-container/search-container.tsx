import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Routes } from "@config/routes";
import { Container, LogoLink, Title } from "./search-container.style";
import { SearchBar } from "@features";

type SearchContainerProps = {
  href: string;
};

const Hero = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: white;

  @media (max-width: 52.125rem) {
    margin: 0.5rem 0;
  }
`;

export function SearchContainer({ href }: SearchContainerProps) {
  return (
    <Container data-cy="search-container">
      <LogoLink href={href} passHref>
        <Title>Marvelous</Title>
      </LogoLink>
      <Hero href={Routes.hero}>Hero</Hero>
      <SearchBar />
    </Container>
  );
}
