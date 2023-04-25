import Link from "next/link";
import React from "react";
import { Routes } from "@config/routes";
import { Container, Input, LogoLink, Title } from "./search-container.style";
import Button from "@mui/material/Button";

export function SearchContainer() {
  return (
    <Container data-cy="search-container">
      <LogoLink href={`${Routes.home}`} passHref>
        <Title>Marvelous</Title>
      </LogoLink>

      <form>
        <Input type="search" placeholder="Search your hero..." />
        <Link href={`${Routes.characters}?nameStartsWith=${name}`} passHref>
          <Button
            variant="outlined"
            style={{ color: "white", border: "1px solid white" }}
          >
            Search
          </Button>
        </Link>
      </form>
    </Container>
  );
}
