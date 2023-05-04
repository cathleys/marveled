import React, { useRef, useContext } from "react";
import { Routes } from "@config/routes";
import * as S from "./search-container.style";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "@features";

export function SearchContainer() {
  const router = useRouter();
  const { isDarkMode, toggleColorMode } = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const label = { inputProps: { "aria-label": "dark mode" } };

  const handleSearchClick = () => {
    const searchValue = inputRef?.current?.value;

    router.push({
      pathname: Routes.characters,
      query: { nameStartsWith: searchValue },
    });
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchClick();
    }
  };

  return (
    <S.Container data-cy="search-container">
      <S.LogoLink href={`${Routes.home}`} passHref>
        <S.Title isDark={isDarkMode}>Marvelous</S.Title>
      </S.LogoLink>

      <S.NavItems href={`${Routes.characterList}`}>Characters A-Z</S.NavItems>

      <S.Form>
        <S.Input
          data-cy="search-bar"
          type="search"
          placeholder="Search your hero..."
          ref={inputRef}
          onKeyDown={handleEnterPress}
        />

        <Button
          data-cy="search-button"
          onClick={handleSearchClick}
          variant="outlined"
          style={{
            color: "white",
            border: "1px solid white",
          }}
        >
          Search
        </Button>
      </S.Form>
      <Switch {...label} color="warning" onClick={() => toggleColorMode()} />
    </S.Container>
  );
}
