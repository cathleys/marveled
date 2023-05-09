import React from "react";
import { FavoritesCard } from "./favorites-card";
import { EmptyPage } from "./favorites.style";
import { ThemeContext } from "@features";

export function FavoritesList() {
  const { isDarkMode } = React.useContext(ThemeContext);
  // check if localStorage is available before accessing
  let favorites = [];
  if (typeof window !== "undefined") {
    favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  }

  const getFavoriteData = (id: number) => {
    const faveItem = JSON.parse(localStorage.getItem(`faveItem${id}`) || "{}");
    return {
      id,
      name: faveItem.name || "",
      thumbnail: faveItem.thumbnail || "",
    };
  };

  if (favorites.length === 0) {
    return (
      <EmptyPage isDark={isDarkMode}>No Favorite Characters found</EmptyPage>
    );
  }
  return (
    <>
      {favorites?.map((id: number) => {
        const favoriteData = getFavoriteData(id);
        return <FavoritesCard key={favoriteData.id} {...favoriteData} />;
      })}
    </>
  );
}
