import React, { useContext } from "react";
import { Card, ImageIcon, Name, Anchor } from "./character.style";
import { Routes } from "@config/routes";
import { ThemeContext } from "@features";

type CharProps = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function CharacterCard({ id, name, thumbnail }: CharProps) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Anchor
      href={{
        pathname: Routes.heroDetails,
        query: { id: id },
      }}
    >
      <Card isDark={isDarkMode}>
        <ImageIcon
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={`${name}`}
        />
        <Name>{name}</Name>
      </Card>
    </Anchor>
  );
}
