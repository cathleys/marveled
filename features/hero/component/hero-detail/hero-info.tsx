import React, { useContext, useEffect, useState } from "react";
import * as A from "@features";
import { FaRegHeart, FaHeart } from "react-icons/fa";

type HeroDetailsProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  attributionText: string;
};
export function HeroInfo({
  id,
  name,
  description,
  attributionText,
  thumbnail,
}: HeroDetailsProps) {
  const { isDarkMode } = useContext(A.ThemeContext);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const getLocalStorage = JSON.parse(localStorage.getItem("favorites") || "[]");

  useEffect(() => {
    if (getLocalStorage.length !== 0) {
      setFavorites(new Set(getLocalStorage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFav = (id: number) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(id)) {
      updatedFavorites.delete(id);
      setFavorites(updatedFavorites);
      console.log("unfavorite");
    } else {
      updatedFavorites.add(id);
      setFavorites(
        (prevFavorites) => new Set([...Array.from(prevFavorites), id])
      );
      console.log("favorite");
    }
    localStorage.setItem(
      "favorites",
      JSON.stringify(Array.from(updatedFavorites))
    );

    // every item in the local storage
    const storage = localStorage.getItem("faveItem" + id || "0");
    if (storage == null) {
      localStorage.setItem(
        "faveItem" + id,
        JSON.stringify({ id, name, thumbnail })
      );
    } else {
      localStorage.removeItem("faveItem" + id);
    }
    console.log("favoriteItems", updatedFavorites);
  };

  return (
    <>
      <A.Container>
        <A.Image
          isDark={isDarkMode}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name}`}
        />

        <A.InfoContainer isDark={isDarkMode}>
          {favorites.has(id) ? (
            <FaHeart
              onClick={() => addFav(id)}
              style={{ color: "#B04759", width: "3em" }}
            />
          ) : (
            <FaRegHeart
              onClick={() => addFav(id)}
              style={{ color: "#B04759", width: "3em" }}
            />
          )}
          <A.HeroName>{name}</A.HeroName>
          <A.Description>{description}</A.Description>
          <A.ButtonWrapper style={{ paddingLeft: "1rem" }}>
            <A.PageButton href="/" label="Find Out More!" />
            <A.Attribution>{attributionText}</A.Attribution>
          </A.ButtonWrapper>
        </A.InfoContainer>
      </A.Container>
    </>
  );
}
