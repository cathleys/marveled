import React, { useRef, useContext } from "react";
import { Routes } from "@config/routes";
import { useRouter } from "next/router";
import * as M from "@mui/material";
import * as C from "@features";
import * as S from "./search-container.style";

const menuItems = [
  { label: "Characters A-Z", href: Routes.characterIndex },
  { label: "Comics", href: Routes.comics },
  { label: "Favorites", href: Routes.favorites },
  { label: "Take A Quiz", href: Routes.quiz },
];

export function SearchContainer() {
  const router = useRouter();
  const { isDarkMode, toggleColorMode } = useContext(C.ThemeContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const label = { inputProps: { "aria-label": "dark mode" } };

  const handleSearchClick = () => {
    const searchValue = inputRef?.current?.value;

    router.push({
      pathname: Routes.character,
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
        <S.Title isDark={isDarkMode}>Marveled</S.Title>
      </S.LogoLink>

      <S.NavItems>
        {menuItems.map((menuItem, index) => (
          <C.CustomLink
            key={index}
            {...menuItem}
            isActive={router.pathname === menuItem.href}
          />
        ))}
      </S.NavItems>

      <S.Form>
        <S.Input
          data-cy="search-bar"
          type="search"
          placeholder="Search your hero..."
          ref={inputRef}
          onKeyDown={handleEnterPress}
        />

        <M.Button
          data-cy="search-button"
          onClick={handleSearchClick}
          variant="outlined"
          style={{
            color: "white",
            border: "1px solid white",
          }}
        >
          Search
        </M.Button>
      </S.Form>
      <M.Switch {...label} color="warning" onClick={() => toggleColorMode()} />
    </S.Container>
  );
}
