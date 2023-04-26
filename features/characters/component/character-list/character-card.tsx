import React from "react";
import { Routes } from "@config/routes";
import Link from "next/link";
import { Card, Image } from "./character.style";

type CharProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export function CharacterCard({ name, thumbnail }: CharProps) {
  return (
    <Link href={`${Routes.hero}/`} passHref>
      <Card>
        <Image
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={`${name}`}
        />
      </Card>
    </Link>
  );
}
