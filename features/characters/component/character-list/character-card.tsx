import React from "react";
import { Routes } from "@config/routes";
import { Card, ImageIcon, Anchor, Name } from "./character.style";

type CharProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function CharacterCard({ name, thumbnail }: CharProps) {
  return (
    <Anchor href={`${Routes.hero}/`} passHref>
      <Card>
        <ImageIcon
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={`${name}`}
        />
        <Name>{name}</Name>
      </Card>
    </Anchor>
  );
}
