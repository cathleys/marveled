import React from "react";
import { Container, LogoLink, Title } from "./search-container.style";

type SearchContainerProps = {
  href: string;
};
export function SearchContainer({ href }: SearchContainerProps) {
  return (
    <Container>
      <LogoLink href={href} passHref>
        <Title>Marvelous</Title>
      </LogoLink>
    </Container>
  );
}
