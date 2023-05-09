import React from "react";
import { Routes } from "@config/routes";
import * as F from "./favorites.style";
import { ThemeContext } from "@features";

type FavoritesCardProps = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function FavoritesCard({ id, name, thumbnail }: FavoritesCardProps) {
  const { isDarkMode } = React.useContext(ThemeContext);
  return (
    <F.ContainerStyle isDark={isDarkMode}>
      <div>
        <F.Icon
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name}`}
        />
      </div>
      <F.TitleAndNotes>
        <F.AnchorLink
          isDark={isDarkMode}
          href={{
            pathname: Routes.characterDetails,
            query: { id: id },
          }}
          passHref
        >
          <F.Title>{name}</F.Title>
        </F.AnchorLink>
        <F.Id isDark={isDarkMode}>ID: {id}</F.Id>
      </F.TitleAndNotes>
    </F.ContainerStyle>
  );
}
