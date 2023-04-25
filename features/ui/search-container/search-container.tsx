import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import { Container, Input, LogoLink, Title } from "./search-container.style";
import Button from "@mui/material/Button";

export function SearchContainer() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    const searchValue = inputRef?.current?.value;
    router.push({
      pathname: Routes.characters,
      query: { nameStartsWith: searchValue },
    });
  };
  return (
    <Container data-cy="search-container">
      <LogoLink href={`${Routes.home}`} passHref>
        <Title>Marvelous</Title>
      </LogoLink>
      <a href={`${Routes.characters}`}>Characters</a>

      <form>
        <Input type="search" placeholder="Search your hero..." ref={inputRef} />

        <Button
          onClick={handleSearchClick}
          variant="outlined"
          style={{ color: "white", border: "1px solid white" }}
        >
          Search
        </Button>
      </form>
    </Container>
  );
}
