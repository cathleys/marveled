import { Routes } from "@config/routes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type CharProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

const Card = styled.div`
  border: 3px solid black;
  border-radius: 0.5rem;
  overflow: hidden;
  animation: fadeIn 0.3s ease-in-out forwards;
  position: relative;
  box-shadow: -1px 33px 58px -23px rgba(0, 0, 0, 0.36);
`;
const Image = styled.img`
  min-width: 100%;
`;

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
