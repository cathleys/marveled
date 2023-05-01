import React from "react";
import { Card, ImageIcon, Name, Anchor } from "./character.style";
import { Routes } from "@config/routes";

type CharProps = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function CharacterCard({ id, name, thumbnail }: CharProps) {
  return (
    <Anchor
      href={{
        pathname: Routes.heroDetails,
        query: { id: id },
      }}
    >
      <Card>
        <ImageIcon
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`${name}`}
        />
        <Name>{name}</Name>
      </Card>
    </Anchor>
  );
}
